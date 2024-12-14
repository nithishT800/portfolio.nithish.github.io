import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSettingsNavListComponent } from './employer-settings-nav-list.component';

describe('EmployerSettingsNavListComponent', () => {
  let component: EmployerSettingsNavListComponent;
  let fixture: ComponentFixture<EmployerSettingsNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerSettingsNavListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerSettingsNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
