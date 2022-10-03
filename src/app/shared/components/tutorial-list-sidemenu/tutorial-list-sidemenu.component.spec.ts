import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialListSidemenuComponent } from './tutorial-list-sidemenu.component';

describe('TutorialListSidemenuComponent', () => {
  let component: TutorialListSidemenuComponent;
  let fixture: ComponentFixture<TutorialListSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialListSidemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialListSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
