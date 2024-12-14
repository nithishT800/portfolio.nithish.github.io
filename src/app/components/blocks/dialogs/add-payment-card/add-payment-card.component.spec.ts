import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentCardComponent } from './add-payment-card.component';

describe('AddPaymentCardComponent', () => {
  let component: AddPaymentCardComponent;
  let fixture: ComponentFixture<AddPaymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPaymentCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
