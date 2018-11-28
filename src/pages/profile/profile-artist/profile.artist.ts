import { Component, OnInit } from "@angular/core";
import { Artist } from "../../../models/Artist";
import { Subscription } from "rxjs/Subscription";
import { ProfileArtistService } from "../../../services/profile.artist.service";
import { ModalController } from "ionic-angular";
import { EditProfilePage } from "../edit-profile/edit.profile";


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

    onEditProfile() {
        let modal = this.modalCtrl.create(EditProfilePage);
        modal.present();
    }
}