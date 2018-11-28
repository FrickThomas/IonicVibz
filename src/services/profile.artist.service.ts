import { Subject } from "rxjs/Subject";
import { Artist } from "../models/Artist";

export class ProfileArtistService {
    
    artist$ = new Subject<Artist>();

    artist: Artist = {
        firstName: 'Thomas',
        sureName: 'Frick',
        pseudo: 'Tomarz',
        style: 'Techno',
        city: 'Paris',
        price: '100',
        email: 'thomas@frick.fr',
        password: 'thomas',
        imagePath: ''
    };

    emitArtist() {
        this.artist$.next(this.artist);
    }
}