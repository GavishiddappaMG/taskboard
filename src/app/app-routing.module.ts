import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: './core/core.module#CoreModule'
  // },
  {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  },
  {
    path: '**',
    redirectTo: '/taskboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
