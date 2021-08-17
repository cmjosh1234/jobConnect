import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.page.html',
  styleUrls: ['./employers.page.scss'],
})
export class EmployersPage implements OnInit {
  employers:any;
  constructor(
    public data:DataService,
    public api:ApiService,
    public router:Router
  ) { }

  ngOnInit() {
    this.fetchAllEmployers()
  }
  fetchAllEmployers(){
    this.api._get('employers').subscribe( data => {
      this.employers = data.docs.map(doc => doc.data());
      
    });
   }
   //fuction for visiting a shop
   visitEmployer(employer){
    localStorage.setItem('activeEmployer', JSON.stringify(employer));
    this.router.navigate(['/tabs/jobs']);
     
   }

   goToApplicationStatus(){
     this.router.navigate(['/applicationstatus'])
   }
   goToProfile(){
    this.router.navigate(['/profile'])
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }



}
