import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormComponentComponent } from './note-form-component.component';

describe('NoteFormComponentComponent', () => {
  let component: NoteFormComponentComponent;
  let fixture: ComponentFixture<NoteFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
