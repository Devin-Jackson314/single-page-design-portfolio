import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header1-component/header-component.component';
import { DesignSolutionComponent } from './design-solution/design-solution.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';

import { IllustrationsComponent } from './illustrations/illustrations.component';
import { PhotographyComponent } from './photography/photography.component';
import { MotionGraphicsComponent } from './motion-graphics/motion-graphics.component';
import { AmyComponent } from './amy/amy.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { BookComponent } from './book/book.component';
import { BottomfooterComponent } from './bottomfooter/bottomfooter.component';
import { AppscardComponent } from './appscard/appscard.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    DesignSolutionComponent,
    GraphicDesignComponent,
 
    IllustrationsComponent,
    PhotographyComponent,
    MotionGraphicsComponent,
    AmyComponent,
    MyWorkComponent,
    BookComponent,
    BottomfooterComponent,
    AppscardComponent,
    UiUxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
