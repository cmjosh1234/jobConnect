import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.page.html',
  styleUrls: ['./positions.page.scss'],
})
export class PositionsPage implements OnInit {
  openForm: boolean = false;
  employer: any;
  jobs: any;
  file: File;
  documentFile=""
  documentUrl=""
  btnText = 'Add Job';
  processing = false;
  img: any;
  constructor(
    public router:Router,
    public data:DataService,
    public api:ApiService,
    public afStorage:AngularFireStorage,
    public toast:ToastController
  ) {

   }

  ngOnInit() {
    this.employer = this.data.getMyEmployer(); 
    this.img = 'assets/icon/employer1.jpg'; //to give employer default profile picture
    
  }
//to carter for switching tabs a lot
  ionViewWillEnter(){
    this.fetchJob(); //to fetch new job
  }
   
  fetchJob() {
    const where =  {key: 'employer_id', value: this.employer.id };
    this.api._get('jobs', where).subscribe( data => {
      this.jobs = data.docs.map(doc => doc.data());
    });
  }

  addBtnClicked() {
    this.openForm = !this.openForm;
  }


  async addServices( form ) {
    this.btnText = 'Please wait ... ';
    this.processing = true;
    const job = form.value;
    job.employer_id = this.employer.id;
    const url = await this.upload(this.documentFile);
    job.imageUrl=url;
    this.api._add('jobs', job, ( result ) => {
          this.btnText = 'Add Job';
          this.processing = false;
          this.img = 'assets/icon/shop.jpg';
          if ( result.flag) {
              this.addBtnClicked();
              this.presentToast()
              this.fetchJob();
          } else {
            alert(result.error.message);
          }
      });
    
  }
      //selecting image
  selectImage(event) {
    this.documentFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.documentUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  //uploading images
  async upload(file) {
    // console.log(file);
    const randomId = Math.random().toString(36).substring(2);
    const ref = this.afStorage.ref("documents/" + randomId);
    const task = await ref.put(file);
    const downloadURL = await task.ref.getDownloadURL();
    return downloadURL;
  }

  //method to create a toaster
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Job Successfully Advertised',
      duration: 2000
    });
    toast.present();
  }

  goToJob(){
    this.router.navigate(['/job'])
  }

}