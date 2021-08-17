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
  //  function to set employer/company
  setMyEmployer(data){
    return localStorage.setItem('myemployer', JSON.stringify(data));
  }
  // function to set job Seeker
  setMyJobSeeker(data){
    return localStorage.setItem('myjobSeeker', JSON.stringify(data));
  }
   // function to get employer/company
  getMyEmployer() {
    return JSON.parse(localStorage.getItem('myemployer'));
  }
  // function to get job Seeker
  getMyJobSeeker() {
    return JSON.parse(localStorage.getItem('myjobSeeker'));
  }
    //function to get active employer
  getActiveEmployer() {
    return JSON.parse(localStorage.getItem('activeEmployer'));
  }
  //function to get active job Seeker
  getActiveJobSeeker() {
    return JSON.parse(localStorage.getItem('activeJobSeeker'));
  }


}