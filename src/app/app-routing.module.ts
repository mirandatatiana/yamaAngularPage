import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'component',
    loadChildren:() => import('./component/component.module').then(m => m.ComponentModule)
  },

  {
    path: 'layout',
    loadChildren:() => import('./layouts/layouts.module').then(m => m.LayoutsModule)
  },

  {
    path: '**',
    redirectTo:'component'
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
