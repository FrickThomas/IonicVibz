import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ViewController } from "ionic-angular";

@Component({
    selector: "page-add-song",
    templateUrl: "add.song.html"
})

export class AddSongPage {
    
    addSongForm: FormGroup;
    
    constructor(private viewCtrl: ViewController,
                private formBuilder: FormBuilder) {

    }
    
    ngOnInit() {
        this.initForm();
    }

    initForm() {
        //TODO: use the objet of the profile to init the form
        this.addSongForm = this.formBuilder.group({
            title: ['', Validators.required]
        });
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }
    
    onAddSong() {

    }
}