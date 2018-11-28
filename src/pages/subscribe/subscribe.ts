import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'page-subcribe',
    templateUrl: './subscribe.html'
})

export class SubscribePage implements OnInit {
    
    subscribeForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.subscribeForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            sureName: ['', Validators.required],
            city: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onSubmitForm() {
        
    }
}