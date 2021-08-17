import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {
  employer: any;
  applicantstatus: any;

  constructor(
    public data:DataService,
    public api:ApiService,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
    this.employer = this.data.getMyEmployer();
  }
  ionViewWillEnter() {
    this.fetchApplicationstatus();
  }
//function to load applications made
  fetchApplicationstatus() {
    const where =  {key: 'employer_id', value: this.employer.id };
    this.api._get('applicantstatus', where).subscribe( data => {
      this.applicantstatus = data.docs.map(doc => doc.data());
    });
  }

  // calling a user
  async callUser(phone) {
    try {
      await this.callNumber.callNumber(phone, true);
    } catch (e) {
      console.error(e);
    }
  }

  confirmApplication(application) {
    this.api._edit('appointments', application.id, {status: 'pending'}, async (result) => {
        this.fetchApplicationstatus();
    });
  }

}
