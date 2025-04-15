import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteListComponentComponent } from './note-list-component.component';

describe('NoteListComponentComponent', () => {
  let component: NoteListComponentComponent;
  let fixture: ComponentFixture<NoteListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
