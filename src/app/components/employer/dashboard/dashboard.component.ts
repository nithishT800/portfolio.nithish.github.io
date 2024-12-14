import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonService } from '../../../services/common.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private common:CommonService){}

  setLoading(){
    this.common.setLoading();
    setTimeout(() => {
      this.common.unsetLoading();
    }, 2000)
  }
}
