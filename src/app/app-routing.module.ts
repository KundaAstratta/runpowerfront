import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunComponent } from './components/run/run.component';
import { ActivityComponent } from './components/activity/activity.component';
import { RunsListComponent } from './components/runs-list/runs-list.component';
import { UploadComponent } from './components/upload/upload.component';



const routes: Routes = [
  { path: 'poweractivity/:activityid', component: RunComponent},
  { path: 'poweractivitylist', component: RunsListComponent},
  { path: 'activity', component: ActivityComponent},
  { path: 'upload', component: UploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
