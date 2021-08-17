import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'jobs',
    loadChildren: () => import('./pages/jobs/jobs.module').then( m => m.JobsPageModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./pages/job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'aboutemployer',
    loadChildren: () => import('./pages/aboutemployer/aboutemployer.module').then( m => m.AboutemployerPageModule)
  },
  {
    path: 'addemployer',
    loadChildren: () => import('./pages/addemployer/addemployer.module').then( m => m.AddemployerPageModule)
  },
  {
    path: 'applicationstatus',
    loadChildren: () => import('./pages/applicationstatus/applicationstatus.module').then( m => m.ApplicationstatusPageModule)
  },
  {
    path: 'employer',
    loadChildren: () => import('./pages/employer/employer.module').then( m => m.EmployerPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tab-bars/tab-bars.module').then( m => m.TabBarsPageModule)
  },
  {
    path: 'employers',
    loadChildren: () => import('./pages/employers/employers.module').then( m => m.EmployersPageModule)
  },
  {
    path: 'setprofile',
    loadChildren: () => import('./pages/setprofile/setprofile.module').then( m => m.SetprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
