import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ViewController } from "ionic-angular";

@Component({
    selector: "page-add-song",
    templateUrl: "add.song.html"
})

export class AddSongPage {
    
    addForm: FormGroup;
    
    constructor(private viewCtrl: ViewController,
                private formBuilder: FormBuilder) {

    }
    
    ngOnInit() {
        this.initForm();
    }

    initForm() {
        //TODO: use the objet of the profile to init the form
        this.addForm = this.formBuilder.group({
            title: [''],
            date: [''],
            address: [''],
            description: ['']
        });
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }
    
}