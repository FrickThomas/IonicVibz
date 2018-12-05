import { Subject } from "rxjs/Subject";
import { Artist } from "../../models/Artist";
import { Song } from "../../models/Song";

export class ProfileArtistService {
    
    artist$ = new Subject<Artist>();
    songList$ = new Subject<Song[]>();

    private artist: Artist = {
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

    private songList: Song[] = [
        {
            title: 'wake up',
            artistName: 'Laurent Garnier'
        }
    ];

    emitArtist() {
        this.artist$.next(this.artist);
    }

    emitSongList() {
        this.songList$.next(this.songList.slice());
    }
}