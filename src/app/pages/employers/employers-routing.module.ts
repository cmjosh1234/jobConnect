import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployersPage } from './employers.page';

const routes: Routes = [
  {
    path: '',
    component: EmployersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployersPageRoutingModule {}
