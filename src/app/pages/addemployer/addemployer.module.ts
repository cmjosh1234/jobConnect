import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddemployerPageRoutingModule } from './addemployer-routing.module';

import { AddemployerPage } from './addemployer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddemployerPageRoutingModule
  ],
  declarations: [AddemployerPage]
})
export class AddemployerPageModule {}
