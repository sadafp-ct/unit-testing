import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellComponent } from '../app/components/well/well.component';
import { WellsWrapperComponent } from '../app/components/wells-wrapper/wells-wrapper.component';

const routes: Routes = [
  { path: '', component: WellsWrapperComponent },
  { path: 'well/:sourceKey', component: WellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
