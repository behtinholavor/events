import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>        
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>        
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf='event?.location'>
            <span>Location: {{event?.location?.address}}</span>            
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf='event?.onlineUrl'>
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>`,
    styles: [`        
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeStyle(): any {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        const isLateStart = this.event && this.event.time === '10:00 am';
        const isNormalStart = this.event && this.event.time === '9:00 am';
        if (isEarlyStart) {
            return { color: '#35c135', 'font-weight': 'bold' }
        } else if (isLateStart) {
            return { color: '#f55454', 'font-weight': 'bold' }
        } else if (isNormalStart) {
            return { color: '#ebebeb', 'font-weight': 'bold' }
        }

    }
}