import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AthleteDTO } from '../shared-data/athlete-dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private baseUrl: string) {}

    getOneAthleteById(athleteid: number): Observable<AthleteDTO> {
      return this.http.get<AthleteDTO>(`${this.baseUrl}/athlete/${athleteid}`);
    }

}
