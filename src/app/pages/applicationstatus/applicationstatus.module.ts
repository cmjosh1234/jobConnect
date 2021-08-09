import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationstatusPageRoutingModule } from './applicationstatus-routing.module';

import { ApplicationstatusPage } from './applicationstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationstatusPageRoutingModule
  ],
  declarations: [ApplicationstatusPage]
})
export class ApplicationstatusPageModule {}
