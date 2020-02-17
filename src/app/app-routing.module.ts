import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunComponent } from './components/run/run.component';
import { ActivityComponent } from './components/activity/activity.component';
import { RunsListComponent } from './components/runs-list/runs-list.component';


const routes: Routes = [
  { path: 'poweractivity', component: RunComponent},
  { path: 'poweractivitylist', component: RunsListComponent},
  { path: 'activity', component: ActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
