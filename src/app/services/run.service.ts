import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PowerActivityDTO } from '../shared-data/power-activity-dto';


@Injectable({
  providedIn: 'root'
})
export class RunService {

  constructor(private http: HttpClient) {}

  getOneRun(): Observable<PowerActivityDTO[]> {
    return this.http.get<PowerActivityDTO[]>('http://localhost:8080/poweractivity');
  }

}
