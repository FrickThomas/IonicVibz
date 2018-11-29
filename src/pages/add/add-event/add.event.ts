import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "page-add-event",
    templateUrl: "add.event.html"
})

export class AddEventPage implements OnInit{

    addEventForm: FormGroup;
    
    constructor(private viewCtrl: ViewController,
                private formBuilder: FormBuilder) {

    }
    
    ngOnInit() {
        this.initForm();
    }

    initForm() {
        //TODO: use the objet of the profile to init the form
        this.addEventForm = this.formBuilder.group({
            title: ['', Validators.required],
            date: ['', Validators.required],
            address: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }

    onAddEvent() {

    }
}