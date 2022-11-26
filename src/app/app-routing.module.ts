import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'cep',
    loadChildren: () => import('./modules/cep/cep.module').then(m => m.CepModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
