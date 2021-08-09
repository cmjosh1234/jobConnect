import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


//setting active user

  getActiveUser() {
    return JSON.parse(localStorage.getItem('activeUser'));
  }
  //  function to set vendor shop
  setMyEmployer(data){
    return localStorage.setItem('myemployer', JSON.stringify(data));

  }
   // function to get vendor shop
  getMyEmployer() {
    return JSON.parse(localStorage.getItem('myemployer'));
  }
    //function to get active shop
  getActiveEmployer() {
    return JSON.parse(localStorage.getItem('activeEmployer'));
  }


}