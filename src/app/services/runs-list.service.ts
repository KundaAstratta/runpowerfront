import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatisticsPowerActivityDTO } from '../shared-data/statistics-power-activity-dto';

@Injectable({
  providedIn: 'root'
})

export class RunsListService {

  constructor(private http: HttpClient,
               @Inject('BACKEND_URL') private baseUrl: string) { }

  getAllStatisticsActivityForOneAthlete(): Observable<StatisticsPowerActivityDTO[]> {
                return this.http.get<StatisticsPowerActivityDTO[]>(`${this.baseUrl}/statisticsactivity/athlete/1`);
              }

}
