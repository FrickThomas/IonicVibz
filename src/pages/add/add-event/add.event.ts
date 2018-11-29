import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "page-add-event",
    templateUrl: "add.event.html"
})

export class AddEventPage implements OnInit{

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