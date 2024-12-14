import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerPrivacySettingComponent } from './employer-privacy-setting.component';

describe('EmployerPrivacySettingComponent', () => {
  let component: EmployerPrivacySettingComponent;
  let fixture: ComponentFixture<EmployerPrivacySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerPrivacySettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerPrivacySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
