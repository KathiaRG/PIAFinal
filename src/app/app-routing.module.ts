import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './Logged/logged/logged.component';
import { Pelicula1Component } from './Peliculas/pelicula1/pelicula1.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'Logged',
    component: LoggedComponent
  },
  {
    path: 'Pelicula1',
    component: Pelicula1Component
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
