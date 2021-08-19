import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';//line 3 & 4 for modal page
import { ModalPage } from '../modal/modal.page';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
 // originalData: any;
 // modifiedData: any;
 filterTerm: string;
  jobs: any;
  job: {};
  employer: any;
  constructor(
    public api:ApiService,
    public data:DataService,
    public modalController:ModalController, // for modal page (modal page is for application)
    public router:Router
  ) { 
   // this.originalData = this.ionViewWillEnter();
   // this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

  resetData(){
 //   this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
  }

 /* filterData(){
    this.modifiedData = this.modifiedData.filter((this.job), => {
        return: this.job.type = this.filter
    });
  } */

  ngOnInit() {
    this.employer = JSON.parse(localStorage.getItem('activeEmployer'));
    //this.fetchAllJobs()
   // console.log(this.originalData);
  }

  ionViewWillEnter() {
    const where = { key: 'employer_id', value: this.employer.id };
    this.api._get('jobs', where).subscribe(data => {
      this.jobs = data.docs.map(doc => doc.data());
    });
  }


  /*fetchAllJobs(){
    this.api._get('jobs').subscribe( data => {
      this.jobs = data.docs.map(doc => doc.data());
      
    });
   }*/
  goToProfile(){
    this.router.navigate(['/profile'])
  }

  backToEmployers(){
    this.router.navigate(['/employers'])
  }

 // to open modal page to apply 
  async presentModal(job) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        job
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.router.navigate(['/applicationstatus']);
    }

}

}
