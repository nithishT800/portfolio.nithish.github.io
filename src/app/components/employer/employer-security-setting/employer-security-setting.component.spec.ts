import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerSecuritySettingComponent } from './employer-security-setting.component';

describe('EmployerSecuritySettingComponent', () => {
  let component: EmployerSecuritySettingComponent;
  let fixture: ComponentFixture<EmployerSecuritySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerSecuritySettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerSecuritySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
