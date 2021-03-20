import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunComponent } from './components/run/run.component';
import { RunsListComponent } from './components/runs-list/runs-list.component';

import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {ChartModule} from 'primeng/chart';

import {ButtonModule} from 'primeng/button';
import { ActivityComponent } from './components/activity/activity.component';

import {CardModule} from 'primeng/card';

import { ReactiveFormsModule } from '@angular/forms';

import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './components/upload/upload.component';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    AppComponent,
    RunComponent,
    RunsListComponent,
    ActivityComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule,
    ChartModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    ProgressBarModule,
    InputTextModule,
    FormsModule, 
    FileUploadModule,
  ],
  providers: [
    { provide: 'BACKEND_URL', useValue: 'http://localhost:8080'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
