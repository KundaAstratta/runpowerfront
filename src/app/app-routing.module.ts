import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunComponent } from './components/run/run.component';
import { ActivityComponent } from './components/activity/activity.component';


const routes: Routes = [
  { path: 'poweractivity', component: RunComponent },
  { path: 'activity', component: ActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
