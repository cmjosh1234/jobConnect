import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AngularFireStorage } from '@angular/fire/storage';
import { Resolve, ActivatedRoute } from "@angular/router";
import { ApiService } from "../services/api.service";
import { DataService } from "../services/data.service";
import { AngularFirestore } from "@angular/fire/firestore";



@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  employer: any;
  user: any;
  @Input() job: string;
  theJob: any;
  openForm: boolean = false;
  file: File;
  documentFile=""
  documentUrl=""
  btnText = 'Apply';
  processing = false;
  img: any;
  jobs:any;

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public dataService:DataService,
    public api:ApiService,
    public activeRoute: ActivatedRoute,
    public navParams: NavParams,
    public afStorage:AngularFireStorage,
    public toast:ToastController,
   // public db: AngularFirestore

  ) {
    //const where =  {key: 'employer_id', value: this.employer.id };
    this.user = this.dataService.getActiveUser();
    //this.employer = this.db.collection('jobs').doc(this.user).get('employer_id')
    //this.employer = this.api._get('jobs', {key: 'employer_id', value: employer.id });
    this.employer = this.dataService.getActiveEmployer();
    this.theJob = this.navParams.get('job');
  }

  onSubmit(form) {
    this.btnText = 'Please wait ..';
    this.processing = true;
    const applicant = form.value;
    applicant.job = this.theJob;
    applicant.user = this.user;
    applicant.employer = this.employer;
    applicant.user_id = this.user.uid;
    applicant.employer_id = this.employer.id;
    applicant.status = 'new';
    this.api._add('applicantstatus', applicant, ( dataResult ) => {
      this.presentToast()
      this.btnText = 'Apply';
      this.processing = true;
      if ( dataResult.flag ) {
        this.close('yes');
      } else {
        console.log(dataResult.error.message);
      }
    });
  }

  ngOnInit() {
   /* const where =  {key: 'employer_id', value: this.employer.id };
    this.employer = this.api._get('jobs', where); */
  }

  close( data = null) {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
  addBtnClicked() {
    this.openForm = !this.openForm;
  }
 /* fetchEmployer() {
    const where =  {key: 'employer_id', value: this.employer.id };
    this.api._get('products', where)/*.subscribe( data => {
      this.pictures = data.docs.map(doc => doc.data());
    });
  } */


  async addServices( form ) {
    this.btnText = 'Please wait ... ';
    this.processing = true;
    const job = form.value;
    job.employer_id = this.employer.id;
    const url = await this.upload(this.documentFile);
    job.imageUrl=url;
    this.api._add('jobs', job, ( result ) => {
          this.processing = false;
          this.img = 'assets/icon/employer.jpg';
          if ( result.flag) {
              this.addBtnClicked();
              this.presentToast();
              
          } else {
            alert(result.error.message);
          }
      });
    
  }
      //selecting document
  selectDocument(event) {
    this.documentFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.documentUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  //uploading document
  async upload(file) {
    // console.log(file);
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref("documents/" + randomId);
    const task = await ref.put(file);
    const downloadURL = await task.ref.getDownloadURL();
    return downloadURL;
  }


  async presentToast() {
    const toast = await this.toast.create({
      message: 'Application Sucessfully Made',
      duration: 2000
    });
    toast.present();
  }
}