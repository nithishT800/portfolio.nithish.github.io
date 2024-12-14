import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDataComponent } from './label-data.component';

describe('LabelDataComponent', () => {
  let component: LabelDataComponent;
  let fixture: ComponentFixture<LabelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
