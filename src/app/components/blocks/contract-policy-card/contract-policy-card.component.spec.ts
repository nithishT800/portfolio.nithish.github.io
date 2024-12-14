import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPolicyCardComponent } from './contract-policy-card.component';

describe('ContractPolicyCardComponent', () => {
  let component: ContractPolicyCardComponent;
  let fixture: ComponentFixture<ContractPolicyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractPolicyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractPolicyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
