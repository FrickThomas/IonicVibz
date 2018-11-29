import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'page-edit-artist-profile',
    templateUrl: 'edit.artist.profile.html'
})

export class EditArtistProfilePage implements OnInit {
    
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
            pseudo: [''],
            city: [''],
            style: [''],
            price: ['']
        });
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }
}