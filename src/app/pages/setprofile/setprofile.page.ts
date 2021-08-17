import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { ModalController, ToastController } from "@ionic/angular";
//import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Resolve, ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-setprofile',
  templateUrl: './setprofile.page.html',
  styleUrls: ['./setprofile.page.scss'],
})
export class SetprofilePage implements OnInit {
  profile: any;
  user: any;
  @Input() job: string;
  theJob: any;
  btnDisabled= false;
  btnText = 'Update Profile';
  processing = false;


  constructor(
    public fireAuth:AngularFireAuth,
    public firestore:AngularFireStorage,
    public service:ApiService,
    public modalCtrl: ModalController,
    public router: Router,
    public dataService:DataService,
    public api:ApiService,
    public activeRoute: ActivatedRoute,
 //   public navParams: NavParams,
    public toast:ToastController
  ) {
    this.user = this.dataService.getActiveUser();
   // this.employer = this.dataService.getActiveEmployer();
   // this.theJob = this.navParams.get('job');
   }
   ngOnInit() {
  }
  onSubmit(form) {
  this.btnText = 'Updating Profile ..';
  this.processing = true;
  const profile = form.value;
  profile.user = this.user;
  const uid = this.user.id;
  this.service._get('profileStatus', {key: 'owner', value: uid}).subscribe( profileData => { 
    const profiles = profileData.docs.map(doc => doc.data());
    if ( profiles.length === 0) {
      this.service._add('profileStatus', profile, ( result ) => {
        this.btnDisabled = false;
        if (result.flag ) {
          localStorage.setItem('myprofile', JSON.stringify(result.data));
          this.router.navigate(['/jobs'])
        } else {
          alert(result.error.message);
        }        
      });
    }
  })
}
} 
 // profile.user_id = this.user.uid;
/*this.service._get('profileStatus', {key: 'owner', value: uid}).subscribe( profileData => {
    const profiles = profileData.docs.map(doc => doc.data());
  if ( profiles.length === 0) {
    this.service._add('profileStatus', profile, ( result ) => {
      this.btnDisabled = false;
      if (result.flag ) {
        localStorage.setItem('myprofile', JSON.stringify(result.data));
        this.router.navigate(['/profile'])
      } else {
        alert(result.error.message);
      }        
    });
  } else {
    this.service._edit('profileStatus', uid, profile, ( result ) => {
      this.btnText = 'Add Profile';
      this.btnDisabled = false;
    }); 
  }
}); */

