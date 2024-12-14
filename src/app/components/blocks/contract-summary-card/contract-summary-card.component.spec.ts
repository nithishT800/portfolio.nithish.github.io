import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSummaryCardComponent } from './contract-summary-card.component';

describe('ContractSummaryCardComponent', () => {
  let component: ContractSummaryCardComponent;
  let fixture: ComponentFixture<ContractSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
