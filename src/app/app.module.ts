import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HindiClassesComponent } from './hindi/hindi-classes/hindi-classes.component';
import { HindiBookListComponent } from './hindi/hindi-book-list/hindi-book-list.component';
import { EngClassesComponent } from './english/eng-classes/eng-classes.component';
import { EngBookLisxComponent } from './english/eng-book-lisx/eng-book-lisx.component';
import { UrduBookListComponent } from './urdu/urdu-book-list/urdu-book-list.component';
import { UrduClassesComponent } from './urdu/urdu-classes/urdu-classes.component';
import { TeacherClassesComponent } from './teacher/teacher-classes/teacher-classes.component';
import { TeacherBookListComponent } from './teacher/teacher-book-list/teacher-book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ViewportComponent } from './viewport/viewport.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { OpenBookComponent } from './hindi/open-book/open-book.component';
import { OpenBookEngComponent } from './english/open-book-eng/open-book-eng.component';
import { BookOpenUrduComponent } from './urdu/book-open-urdu/book-open-urdu.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { Class1Component } from './hindi/book/class1/class1.component';
import { Class2Component } from './hindi/book/class2/class2.component';
import { Class3Component } from './hindi/book/class3/class3.component';
import { Class4Component } from './hindi/book/class4/class4.component';
import { Class5Component } from './hindi/book/class5/class5.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OpenTMComponent } from './teacher/open-tm/open-tm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HindiClassesComponent,
    HindiBookListComponent,
    EngClassesComponent,
    EngBookLisxComponent,
    UrduBookListComponent,
    UrduClassesComponent,
    TeacherClassesComponent,
    TeacherBookListComponent,
    ViewportComponent,
    OpenBookComponent,
    OpenBookEngComponent,
    BookOpenUrduComponent,
    Class1Component,
    Class2Component,
    Class3Component,
    Class4Component,
    Class5Component,
    OpenTMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    PdfViewerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ }),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
