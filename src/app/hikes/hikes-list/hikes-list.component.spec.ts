import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StarComponent } from '../../shared/star/star.component';
import { AppendMilesPipe } from '../../shared/append-miles.pipe';
import { HikesService } from '../hikes.service';

import { HikesListComponent } from './hikes-list.component';

describe('HikesListComponent', () => {
  let component: HikesListComponent;
  let fixture: ComponentFixture<HikesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        HikesListComponent,
        StarComponent,
        AppendMilesPipe,
      ],
      providers: [HikesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HikesListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Hiking Trails');
  }));
});
