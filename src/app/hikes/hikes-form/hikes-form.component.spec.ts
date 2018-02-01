import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikesFormComponent } from './hikes-form.component';

describe('HikesFormComponent', () => {
  let component: HikesFormComponent;
  let fixture: ComponentFixture<HikesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
