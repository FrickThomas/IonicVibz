import { Subject } from "rxjs/Subject";
import { Event } from "../models/Event";

export class NewsViewArtistService {
    
    event$ = new Subject<Event>();

    event: Event = {
        title: 'Soirée Disco',
        date: '24/11/18',
        address: '2 rue Saint-honoré',
        description: 'soirée pour les amoureux de la disco',
        imagePath: ''
    };

    emitEvent() {
        this.event$.next(this.event);
    }
}