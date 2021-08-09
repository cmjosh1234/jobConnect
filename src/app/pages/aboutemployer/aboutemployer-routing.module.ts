import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutemployerPage } from './aboutemployer.page';

const routes: Routes = [
  {
    path: '',
    component: AboutemployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutemployerPageRoutingModule {}
