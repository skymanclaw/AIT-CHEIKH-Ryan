import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteItemComponentComponent } from './note-item-component.component';

describe('NoteItemComponentComponent', () => {
  let component: NoteItemComponentComponent;
  let fixture: ComponentFixture<NoteItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
