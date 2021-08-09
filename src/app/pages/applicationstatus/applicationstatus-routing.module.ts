import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationstatusPage } from './applicationstatus.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicationstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationstatusPageRoutingModule {}
