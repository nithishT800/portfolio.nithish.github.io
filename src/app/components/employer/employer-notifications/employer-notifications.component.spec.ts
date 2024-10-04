import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerNotificationsComponent } from './employer-notifications.component';

describe('EmployerNotificationsComponent', () => {
  let component: EmployerNotificationsComponent;
  let fixture: ComponentFixture<EmployerNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
