import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared';
@Component({
    // selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>        
        <hr>  
        <div class="row">
            <div *ngFor="let item of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(item.name)" [event]="item"></event-thumbnail>               
            </div>
        </div>    
    </div>`
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, private toastr: ToastrService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }

}