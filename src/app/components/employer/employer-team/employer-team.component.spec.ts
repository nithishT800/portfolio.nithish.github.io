import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerTeamComponent } from './employer-team.component';

describe('EmployerTeamComponent', () => {
  let component: EmployerTeamComponent;
  let fixture: ComponentFixture<EmployerTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
