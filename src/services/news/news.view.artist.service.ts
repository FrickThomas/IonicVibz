import { Subject } from "rxjs/Subject";
import { Event } from "../../models/Event";

export class NewsViewArtistService {
    
    eventList$ = new Subject<Event[]>();

    private eventList: Event[] = [
        {
        title: 'Soirée Disco',
        date: '24/11/18',
        address: '2 rue Saint-honoré',
        description: 'soirée pour les amoureux de la disco',
        imagePath: ''
        }
    ];

    emitEvent() {
        this.eventList$.next(this.eventList.slice());
    }
}