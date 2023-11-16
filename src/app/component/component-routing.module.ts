import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ReikiComponent } from './reiki/reiki.component';
import { TarotComponent } from './tarot/tarot.component';
import { WorkshopsComponent } from './workshops/workshops.component';

const routes: Routes = [
  {
    path:'',
    children:[
     { path: 'home', component: HomeComponent },
     { path: 'appointments', component: AppointmentsComponent },
     { path: 'reiki', component: ReikiComponent },
     { path: 'tarot', component: TarotComponent },
     { path: 'workshops', component: WorkshopsComponent },
     { path: '**', redirectTo: 'home' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
