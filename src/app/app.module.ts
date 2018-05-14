import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
      AppComponent,
      TasksComponent,
      TaskDetailComponent,
      MessagesComponent,
      DashboardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
