import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { SubscribePage } from '../subscribe/subscribe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  homeForm: FormGroup;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private modalCtrl: ModalController) {
                
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.homeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    const email = this.homeForm.get('email').value;
    const password = this.homeForm.get('password').value;
    
    this.navCtrl.setRoot(TabsPage);
  }

  onSignOn() {
    let modal = this.modalCtrl.create(SubscribePage);
    modal.present();
  }

}