import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

//import { EmployerPageRoutingModule } from './employer-routing.module';

import { EmployerPage } from './employer.page';
import { PositionsPage } from './positions/positions.page';
import { AboutemployerPage } from './aboutemployer/aboutemployer.page';
import { ApplicationsPage } from './applications/applications.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerPage ,
    children: [
      {
        path: 'positions',
        children: [
          {
            path: '',
            component: PositionsPage
          }
        ]
      },
      {
        path: 'applications',
        children: [
          {
            path: '',
            component: ApplicationsPage
          }
        ]
      },
      {
        path: 'aboutemployer',
        children: [
          {
            path: '',
            component: AboutemployerPage
          }
        ]
      },
      {
        path: '',
        redirectTo: '/employer/aboutemployer',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/employer/jobs',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmployerPage,PositionsPage,ApplicationsPage,AboutemployerPage]
})
export class EmployerPageModule {}
