import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutemployerPageRoutingModule } from './aboutemployer-routing.module';

import { AboutemployerPage } from './aboutemployer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutemployerPageRoutingModule
  ],
  declarations: [AboutemployerPage]
})
export class AboutemployerPageModule {}
