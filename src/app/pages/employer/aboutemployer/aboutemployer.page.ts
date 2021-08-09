import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-aboutemployer',
  templateUrl: './aboutemployer.page.html',
  styleUrls: ['./aboutemployer.page.scss'],
})
export class AboutemployerPage implements OnInit {
  employer:any;
   file:File;
  constructor(public data:DataService,public api:ApiService,public router:Router,public loading:LoadingController) { }

  ngOnInit() {
    this.employer = this.data.getMyEmployer();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async pickPhoto( $event ) {
    const loading = await this.loading.create({
      message: 'Uploading image ...',
    });
    await loading.present();

    this.file = $event.target.files[0];
    this.api._uploadImageFile( this.file, 'employerPro', ( result ) => {
      if ( result.flag ) {
        this.employer.img = result.url;
        this.api._edit('employers', this.employer.id, { img: result.url}, ( data ) => {
          loading.dismiss();
          this.data.setMyEmployer(this.employer);
          this.getEmployer();
        });
      } else {

      }
    });
  }

  getEmployer() {
    this.employer = this.data.getMyEmployer();
  }

}
