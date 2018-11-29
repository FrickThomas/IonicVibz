import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "page-edit-organizer-profile",
    templateUrl: "./edit.organizer.profile.html"
})

export class EditOrganizerProfilePage implements OnInit {

    editForm: FormGroup;
    
    constructor(private viewCtrl: ViewController,
                private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        //TODO: use the objet of the profile to init the form
        this.editForm = this.formBuilder.group({
            firstName: [''],
            sureName: [''],
            city: ['']
        });
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }
}