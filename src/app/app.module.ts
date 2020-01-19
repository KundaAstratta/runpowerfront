import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunComponent } from './components/run/run.component';
import { RunsListComponent } from './components/runs-list/runs-list.component';

import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    RunComponent,
    RunsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
