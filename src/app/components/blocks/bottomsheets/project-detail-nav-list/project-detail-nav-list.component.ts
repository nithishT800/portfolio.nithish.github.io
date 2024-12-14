import { JsonPipe } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project-detail-nav-list',
  standalone: true,
  imports: [MatListModule, JsonPipe, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './project-detail-nav-list.component.html',
  styleUrl: './project-detail-nav-list.component.scss'
})
export class ProjectDetailNavListComponent {

    private _bottomSheetRef = inject<MatBottomSheetRef<ProjectDetailNavListComponent>>(MatBottomSheetRef);

    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: {nav_list: any[], params:any}) { }

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
