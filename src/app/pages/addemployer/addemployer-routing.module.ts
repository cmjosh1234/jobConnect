import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddemployerPage } from './addemployer.page';

const routes: Routes = [
  {
    path: '',
    component: AddemployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddemployerPageRoutingModule {}
