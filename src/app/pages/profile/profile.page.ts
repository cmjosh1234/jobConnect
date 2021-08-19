import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../services/api.service'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  jobSeeker:any;
  file:File;

  constructor(
    public router: Router,
    public data:DataService,
    public api:ApiService,
    public loading:LoadingController
  ) { }

  ngOnInit() {
    this.jobSeeker = JSON.parse(localStorage.getItem('activeJobSeeker'));
    this.jobSeeker = this.data.getMyJobSeeker();
  }
  async pickPhoto( $event ) {
    const loading = await this.loading.create({
      message: 'Uploading image ...',
    });
    await loading.present();

    this.file = $event.target.files[0];
    this.api._uploadImageFile( this.file, 'jobSeekerPro', ( result ) => {
      if ( result.flag ) {
        this.jobSeeker.img = result.url;
        this.api._edit('profileStatus', this.jobSeeker.id, { img: result.url}, ( data ) => {
          loading.dismiss();
          this.data.setMyJobSeeker(this.jobSeeker);
          this.getJobSeeker();
        });
      } else {

      }
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
  getJobSeeker() {
    this.jobSeeker = this.data.getMyJobSeeker();
  }

  backToEmployers(){
    this.router.navigate(['/employers'])
  }


}
