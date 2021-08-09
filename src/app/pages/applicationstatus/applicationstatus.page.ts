import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-applicationstatus',
  templateUrl: './applicationstatus.page.html',
  styleUrls: ['./applicationstatus.page.scss'],
})
export class ApplicationstatusPage implements OnInit {
  user: any;
  page = 0;
  maximumPages = 3;
  application = {};
  applicationstatus: any;
  jobs: any;
  employer: any;
  constructor(
    public data:DataService,
    public api:ApiService,
    public actionSheetController: ActionSheetController,
    public toast:ToastController,
    public router:Router
  ) { }

  ngOnInit() {
    this.user = this.data.getActiveUser();
  }

  //loading action sheet
  async presentActionSheet(order) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Action',
      buttons: [
        {},
        {
          text: 'Confirm',
          icon: 'share',
          handler: () => {
            this.actOnApplication({status: 'confirmed'}, order);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.actOnApplication({status: 'canceled'}, order);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ionViewWillEnter() {
    this.fetchMyApplicationstatus();
  }

  fetchMyApplicationstatus(){
    const where = {key: 'user_id', value: this.user.uid };
    this.api._get('applicationstatus', where).subscribe(data => {
      this.applicationstatus = data.docs.map(doc => doc.data());
    });
  }

   
  async showToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  actOnApplication(status, application) {
    this.api._edit('applicationstatus', application.id, status, async (result) => {
      await this.showToast(`Confirmation done`);
      this.fetchMyApplicationstatus();
    });
  }

  goToEmployers(){
    this.router.navigate(['/employers'])
  }


}
