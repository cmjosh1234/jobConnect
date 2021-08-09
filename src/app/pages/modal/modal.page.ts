import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Resolve, ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  employer: any;
  user: any;
  @Input() job: string;
  theJob: any;

  btnText = 'Make Application';
  processing = false;

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public dataService:DataService,
    public api:ApiService,
    public activeRoute: ActivatedRoute,
    public navParams: NavParams,
    public toast:ToastController
  ) { 
    this.user = this.dataService.getActiveUser();
    this.employer = this.dataService.getActiveEmployer();
    this.theJob = this.navParams.get('job');
  }
  onSubmit(form) {
    this.btnText = 'Pease wait ..';
    this.processing = true;
    const application = form.value;
    application.product = this.theJob;
    application.user = this.user;
    application.employer = this.employer;
    application.user_id = this.user.uid;
    application.employer_id = this.employer.id;
    application.status = 'new';
    this.api._add('applicationstatus', application, ( dataResult ) => {
      this.presentToast()
      this.btnText = 'Make Application';
      this.processing = true;
      if ( dataResult.flag ) {
        this.close('yes');
      } else {
        console.log(dataResult.error.message);
      }
    });
  }

  ngOnInit() {}

  close( data = null) {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }


  async presentToast() {
    const toast = await this.toast.create({
      message: 'Application Sucessfully Made',
      duration: 2000
    });
    toast.present();
  }
}
