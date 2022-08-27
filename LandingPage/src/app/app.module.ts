import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { DesignSolutionComponent } from './design-solution/design-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    DesignSolutionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
