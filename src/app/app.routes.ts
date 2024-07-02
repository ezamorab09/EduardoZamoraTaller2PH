import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },


  {
    path: 'manage-citas',
    loadComponent: () => import('./page/manage-citas/manage-citas.page').then((m) => m.ManageCitasPage),
  },

  {
    path: 'configuracion',
    loadComponent: () => import('./page/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
  {
    path: 'ver-citas',
    loadComponent: () => import('./pages/ver-citas/ver-citas.page').then( m => m.VerCitasPage)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


