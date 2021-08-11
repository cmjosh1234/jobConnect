import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {

  employer: any;
  jobs: any;
  constructor(
    public router:Router,
    public data:DataService,
    public api:ApiService,
    public afStorage:AngularFireStorage
  ) { }

  ngOnInit() {
    this.employer = this.data.getMyEmployer(); 
  }
  fetchJob() {
    const where =  {key: 'employer_id', value: this.employer.id };
    this.api._get('jobs', where).subscribe( data => {
      this.jobs = data.docs.map(doc => doc.data());
    });
  }

}
