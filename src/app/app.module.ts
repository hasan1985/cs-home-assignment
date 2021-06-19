import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxV1Module, GridV1Module } from '@csha-ui-comp-lib';
import { RowSelectorCellComponent } from './row-selector-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    RowSelectorCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridV1Module,
    CheckboxV1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
