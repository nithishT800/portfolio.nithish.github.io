import { JsonPipe, LowerCasePipe, NgClass, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CreditCardBrandIdentifierPipe } from "../../../pipes/credit-card-brand-identifier.pipe";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../blocks/snackbar/snackbar.component';
import { MatDialog } from '@angular/material/dialog';
import { AddPaymentCardComponent } from '../../blocks/dialogs/add-payment-card/add-payment-card.component';
@Component({
  selector: 'app-employer-manage-payment',
  standalone: true,
  imports: [
            JsonPipe, MatCardModule, FormsModule, CreditCardBrandIdentifierPipe, MatIconModule, 
            MatInputModule, MatFormFieldModule, LowerCasePipe, MatButtonModule, NgClass,
            MatTooltipModule, NgOptimizedImage
        ],
  templateUrl: './employer-manage-payment.component.html',
  styleUrl: './employer-manage-payment.component.scss'
})
export class EmployerManagePaymentComponent {

    public card_list:any = [];
    public card:any = {}
    private snackBar = inject(MatSnackBar);
    readonly dialog = inject(MatDialog);
    constructor(private http: HttpClient){}

    ngOnInit(){
        this.getCardList();
    }

    getCardList(){
        this.http.get('data/credit-cards.json').subscribe((response:any) => {
            this.card_list = response;
        })
    }

    makeTheCardPrimary(card:any){
        this.card_list.map((card_item:any) => {
            if(card_item.card_number == card.card_number){
                card_item.is_primary = true;
                this.snackBar.openFromComponent(SnackbarComponent, {data: 'changed_primary_card'});
            }else{
                card_item.is_primary = false;
            }
        })
    }

    initAddNewCard(card:any = {}){

        const dialogRef = this.dialog.open(AddPaymentCardComponent, {
            data: {card: card, mode: (card) ? 'edit' : 'add'},
            width: "100vh"
        });
    }
}
