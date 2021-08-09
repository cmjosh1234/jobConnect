import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-aboutemployer',
  templateUrl: './aboutemployer.page.html',
  styleUrls: ['./aboutemployer.page.scss'],
})
export class AboutemployerPage implements OnInit {
  employer: any;

  constructor(public data:DataService) { }

  ngOnInit() {
    this.employer = JSON.parse(localStorage.getItem('activeEmployer'));
  }

}
