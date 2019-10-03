import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellComponent } from './components/well/well.component';
import { WellListComponent } from './components/well-list/well-list.component';
import { AddWellComponent } from './components/add-well/add-well.component';
import { WellsWrapperComponent } from './components/wells-wrapper/wells-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    WellComponent,
    WellListComponent,
    AddWellComponent,
    WellsWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
