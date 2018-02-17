import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHikeComponent } from './edit-hike.component';

describe('EditHikeComponent', () => {
  let component: EditHikeComponent;
  let fixture: ComponentFixture<EditHikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
