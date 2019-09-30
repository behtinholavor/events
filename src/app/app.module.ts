import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from "../routes";

import {
  CreateEventComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  EventListResolver,
  EventRouteActivator
} from './events/index';

import { NavBarComponent } from './nav/nav-bar.component';
import { EventsAppComponent } from './events-app.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './erros/404.component';
import { AuthService } from './user/auth.service';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this even. Do you really want to cancel?');
}