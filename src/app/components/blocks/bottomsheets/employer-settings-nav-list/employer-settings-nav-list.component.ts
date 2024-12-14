import { JsonPipe } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-employer-settings-nav-list',
  standalone: true,
  imports: [MatListModule, JsonPipe, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './employer-settings-nav-list.component.html',
  styleUrl: './employer-settings-nav-list.component.scss'
})
export class EmployerSettingsNavListComponent {

  private _bottomSheetRef = inject<MatBottomSheetRef<EmployerSettingsNavListComponent>>(MatBottomSheetRef);

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {nav_list: any[], params:any}) { }

  openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
  }
}
