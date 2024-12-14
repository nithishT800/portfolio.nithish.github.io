import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProjectListNavListComponent } from './employer-project-list-nav-list.component';

describe('EmployerProjectListNavListComponent', () => {
  let component: EmployerProjectListNavListComponent;
  let fixture: ComponentFixture<EmployerProjectListNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerProjectListNavListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerProjectListNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
