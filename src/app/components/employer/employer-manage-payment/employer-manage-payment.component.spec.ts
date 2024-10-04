import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerManagePaymentComponent } from './employer-manage-payment.component';

describe('EmployerManagePaymentComponent', () => {
  let component: EmployerManagePaymentComponent;
  let fixture: ComponentFixture<EmployerManagePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerManagePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerManagePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
