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

  constructor(
    public router:Router,
    public data:DataService,
    public api:ApiService,
    public afStorage:AngularFireStorage
  ) { }

  ngOnInit() { 
  }


}
