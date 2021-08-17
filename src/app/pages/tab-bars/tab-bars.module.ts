import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { TabBarsPageRoutingModule } from './tab-bars-routing.module';
import { TabBarsPage } from './tab-bars.page';
import { JobPage } from '../job/job.page';
import { AboutemployerPage } from '../aboutemployer/aboutemployer.page';
import { JobsPage } from '../jobs/jobs.page';

const routes: Routes = [
  {
    path: '',
    component: TabBarsPage,
    children: [
      {
        path: 'jobs',
        children: [
          {
            path: '',
            component: JobsPage
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
        redirectTo: '/tabs/jobs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/jobs',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
   // TabBarsPageRoutingModule
  ],
  declarations: [TabBarsPage, AboutemployerPage, JobsPage]
})
export class TabBarsPageModule {}
