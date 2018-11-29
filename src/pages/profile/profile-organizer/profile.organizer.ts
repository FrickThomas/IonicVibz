import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { ProfileOrganizerService } from "../../../services/profile.organizer.service";
import { Organizer } from "../../../models/Organizer";
import { ModalController } from "ionic-angular";
import { EditOrganizerProfilePage } from "../edit-profile/edit-organizer-profile/edit.organizer.profile";
import { AddEventPage } from "../../add/add-event/add.event";

@Component({
    selector: "page-profile-organizer",
    templateUrl: "./profile.organizer.html"
})

export class ProfileOrganizerPage implements OnInit {
    
    organizer: Organizer;
    organizerSubcription: Subscription;
    
    constructor(private profileOrganizerService: ProfileOrganizerService,
                private modalCtrl: ModalController) {

    }

    ngOnInit() {
        this.organizerSubcription = this.profileOrganizerService.organizer$.subscribe(
            (organizer: Organizer) => {
                this.organizer = organizer;
            }
        );
        this.profileOrganizerService.emitOrganizer();
    }

    onEditOrganizerProfile() {
        let modal = this.modalCtrl.create(EditOrganizerProfilePage);
        modal.present();
    }

    onAddEvent() {
        let modal = this.modalCtrl.create(AddEventPage);
        modal.present();
    }
}