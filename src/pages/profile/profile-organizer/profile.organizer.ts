import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { ProfileOrganizerService } from "../../../services/profile/profile.organizer.service";
import { Organizer } from "../../../models/Organizer";
import { ModalController } from "ionic-angular";
import { EditOrganizerProfilePage } from "../edit-profile/edit-organizer-profile/edit.organizer.profile";
import { AddEventPage } from "../../add/add-event/add.event";
import { Event } from "../../../models/Event";

@Component({
    selector: "page-profile-organizer",
    templateUrl: "./profile.organizer.html"
})

export class ProfileOrganizerPage implements OnInit {
    
    organizer: Organizer;
    organizerSubcription: Subscription;

    eventList: Event[];
    eventListSubcripiton: Subscription;
    
    constructor(private profileOrganizerService: ProfileOrganizerService,
                private modalCtrl: ModalController) {

    }

    ngOnInit() {
        this.organizerSubcription = this.profileOrganizerService.organizer$.subscribe(
            (organizer: Organizer) => {
                this.organizer = organizer;
            }
        );

        this.eventListSubcripiton = this.profileOrganizerService.eventList$.subscribe(
            (eventList: Event[]) => {
                this.eventList = eventList;
            }
        );

        this.profileOrganizerService.emitOrganizer();
        this.profileOrganizerService.emitEventList();
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