import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { AppendMilesPipe } from './append-miles.pipe';
import { AuthGuard } from './auth.guard';
import { RatingService } from './rating.service';

@NgModule({
  imports: [CommonModule],
  declarations: [StarComponent, AppendMilesPipe],
  providers: [AuthGuard],
  exports: [CommonModule, StarComponent, AppendMilesPipe]
})
export class SharedModule {
  // this is necessary to avoid creating a second service instance in a lazy-loaded module
  // see here for explanation: https://angular-2-training-book.rangle.io/handout/modules/shared-di-tree.html
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RatingService]
    };
  }
}
