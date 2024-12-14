import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailNavListComponent } from './project-detail-nav-list.component';

describe('ProjectDetailNavListComponent', () => {
  let component: ProjectDetailNavListComponent;
  let fixture: ComponentFixture<ProjectDetailNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailNavListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
