import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployerPage } from './employer.page';

const routes: Routes = [
  {
    path: '', component: EmployerPage
  },
  {
    path: 'aboutemployer',
    loadChildren: () => import('./aboutemployer/aboutemployer.module').then( m => m.AboutemployerPageModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./applications/applications.module').then( m => m.ApplicationsPageModule)
  },
  {
    path: 'positions',
    loadChildren: () => import('./positions/positions.module').then( m => m.PositionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerPageRoutingModule {}
