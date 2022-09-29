import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPagesComponent } from './project-pages.component';

describe('ProjectPagesComponent', () => {
  let component: ProjectPagesComponent;
  let fixture: ComponentFixture<ProjectPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
