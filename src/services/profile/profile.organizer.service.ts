import { Subject } from "rxjs/Subject";
import { Organizer } from "../../models/Organizer";
import { Event } from "../../models/Event";

export class ProfileOrganizerService {
    
    organizer$ = new Subject<Organizer>();
    eventList$ = new Subject<Event[]>();

    private organizer: Organizer = {
        firstName: 'Jean',
        sureName: 'Alsa',
        city: 'Paris',
        email: 'jean@alse.fr',
        password: 'jean',
        imagePath: ''
    };

    private eventList: Event[] = [
        {
            title: 'Soirée techno',
            date: '05/12/18',
            address: '34 quai de la rapée',
            description: 'Ouvert à tous',
            imagePath: ''
        }
    ];

    emitOrganizer() {
        this.organizer$.next(this.organizer);
    }

    emitEventList() {
        this.eventList$.next(this.eventList.slice());
    }
}