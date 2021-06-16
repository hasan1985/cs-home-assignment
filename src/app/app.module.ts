import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CshaUiCompLibModule } from '@csha-ui-comp-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CshaUiCompLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
