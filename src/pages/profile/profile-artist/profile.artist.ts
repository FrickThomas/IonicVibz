import { Component, OnInit } from "@angular/core";
import { Artist } from "../../../models/Artist";
import { Song } from "../../../models/Song"
import { Subscription } from "rxjs/Subscription";
import { ProfileArtistService } from "../../../services/profile/profile.artist.service";
import { ModalController } from "ionic-angular";
import { EditArtistProfilePage } from "../edit-profile/edit-artist-profile/edit.artist.profile";
import { AddSongPage } from "../../add/add-song/add.song";


@Component({
    selector: 'page-profile-artist',
    templateUrl: './profile.artist.html'
})

export class ProfileArtistPage implements OnInit {

    artist: Artist;
    artistSubscription: Subscription;

    songList: Song[];
    songListSubcription: Subscription;

    constructor(private profileArtistService: ProfileArtistService,
                private modalCtrl: ModalController) {

    }

    ngOnInit() {
        this.artistSubscription = this.profileArtistService.artist$.subscribe(
            (artist: Artist) => {
                this.artist = artist;
            }
        );

        this.songListSubcription = this.profileArtistService.songList$.subscribe(
            (songList: Song[]) => {
                this.songList = songList;
            }
        );

        this.profileArtistService.emitArtist();
        this.profileArtistService.emitSongList();
    }

    onEditArtistProfile() {
        let modal = this.modalCtrl.create(EditArtistProfilePage);
        modal.present();
    }

    onAddSong() {
        let modal = this.modalCtrl.create(AddSongPage);
        modal.present();
    }
}