import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPublicJournalComponent } from './my-public-journal.component';

describe('MyPublicJournalComponent', () => {
  let component: MyPublicJournalComponent;
  let fixture: ComponentFixture<MyPublicJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPublicJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPublicJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
