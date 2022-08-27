import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { DesignSolutionComponent } from './design-solution/design-solution.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { AppsComponent } from './apps/apps.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { PhotographyComponent } from './photography/photography.component';
import { MotionGraphicsComponent } from './motion-graphics/motion-graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    DesignSolutionComponent,
    GraphicDesignComponent,
    AppsComponent,
    IllustrationsComponent,
    PhotographyComponent,
    MotionGraphicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
