import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuiService } from './nui/nui.service';
import { DisplayService } from './display/display.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   NuiService,
   DisplayService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
