import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTermConditionsCardComponent } from './contract-term-conditions-card.component';

describe('ContractTermConditionsCardComponent', () => {
  let component: ContractTermConditionsCardComponent;
  let fixture: ComponentFixture<ContractTermConditionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractTermConditionsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractTermConditionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
