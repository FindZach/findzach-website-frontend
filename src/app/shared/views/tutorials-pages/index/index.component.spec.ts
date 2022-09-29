import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: TutorialIndexComponent;
  let fixture: ComponentFixture<TutorialIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
