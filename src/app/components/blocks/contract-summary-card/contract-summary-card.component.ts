import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LabelDataComponent } from "../label-data/label-data.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'contract-summary-card',
  standalone: true,
  imports: [MatCardModule, JsonPipe, LabelDataComponent, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './contract-summary-card.component.html',
  styleUrl: './contract-summary-card.component.scss'
})
export class ContractSummaryCardComponent {
    @Input() project_detail!:any

    ngOnInit(){
      console.log('ContractSummaryCardComponent', this.project_detail)
    }
}
