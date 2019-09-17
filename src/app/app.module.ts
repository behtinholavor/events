import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],

  // providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
