import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employer-transaction-history',
  standalone: true,
  imports: [JsonPipe, MatTableModule, MatPaginatorModule, MatCardModule],
  templateUrl: './employer-transaction-history.component.html',
  styleUrl: './employer-transaction-history.component.scss'
})
export class EmployerTransactionHistoryComponent {

    public transaction_list:any = new MatTableDataSource<any>([]);
    displayedColumns: string[] = ['transaction_type_text', 'transaction_reference', 'transaction_date', 'transaction_amount', 'transaction_note'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    constructor(private http:HttpClient){}

    ngOnInit(){
        this.getTransactionList();
    }
    ngAfterViewInit() {
        this.transaction_list.paginator = this.paginator;
    }
    getTransactionList(){
        this.http.get('data/employer-transactions.json').subscribe((response:any) => {
            this.transaction_list = response;
        })
    }

    

    
}
