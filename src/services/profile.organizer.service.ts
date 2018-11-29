import { Subject } from "rxjs/Subject";
import { Organizer } from "../models/Organizer";

export class ProfileOrganizerService {
    
    organizer$ = new Subject<Organizer>();

    organizer: Organizer = {
        firstName: 'Jean',
        sureName: 'Alsa',
        city: 'Paris',
        email: 'jean@alse.fr',
        password: 'jean',
        imagePath: ''
    };

    emitOrganizer() {
        this.organizer$.next(this.organizer);
    }
}