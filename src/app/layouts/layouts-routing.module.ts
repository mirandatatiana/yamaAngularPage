import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path:'',
    children:[
     { path: 'content-layout', component: ContentLayoutComponent },
     { path: 'footer', component: FooterComponent },
     { path: 'nav', component: NavComponent },
     { path: '**', redirectTo: 'content-layout' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
