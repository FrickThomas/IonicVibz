import { Component, OnInit } from "@angular/core";
import { Artist } from "../../../models/Artist";
import { Subscription } from "rxjs/Subscription";
import { ProfileArtistService } from "../../../services/profile.artist.service";
import { ModalController } from "ionic-angular";
import { EditArtistProfilePage } from "../edit-profile/edit-artist-profile/edit.artist.profile";
import { AddSongPage } from "../../add/add-song/add.song";


@Component({
    selector: 'page-profile-artist',
    templateUrl: './profile.artist.html'
})

export class ProfileArtistPage implements OnInit {

    artist: Artist
    artistSubscription: Subscription;

    constructor(private profileArtistService: ProfileArtistService,
                private modalCtrl: ModalController) {

    }

    ngOnInit() {
        this.artistSubscription = this.profileArtistService.artist$.subscribe(
            (artist: Artist) => {
                this.artist = artist;
            }
        );
        this.profileArtistService.emitArtist();
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