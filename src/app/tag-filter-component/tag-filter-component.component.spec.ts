import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFilterComponentComponent } from './tag-filter-component.component';

describe('TagFilterComponentComponent', () => {
  let component: TagFilterComponentComponent;
  let fixture: ComponentFixture<TagFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagFilterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
