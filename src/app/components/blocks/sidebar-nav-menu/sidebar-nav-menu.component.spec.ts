import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavMenuComponent } from './sidebar-nav-menu.component';

describe('SidebarNavMenuComponent', () => {
  let component: SidebarNavMenuComponent;
  let fixture: ComponentFixture<SidebarNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
