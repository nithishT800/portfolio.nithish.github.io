import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerTransactionHistoryComponent } from './employer-transaction-history.component';

describe('EmployerTransactionHistoryComponent', () => {
  let component: EmployerTransactionHistoryComponent;
  let fixture: ComponentFixture<EmployerTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerTransactionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
