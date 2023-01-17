import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Comp2Component, Comp1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
