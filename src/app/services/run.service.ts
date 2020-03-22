import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PowerActivityDTO } from '../shared-data/power-activity-dto';
import { StatisticsPowerActivityDTO } from '../shared-data/statistics-power-activity-dto';
import { AthleteDTO } from '../shared-data/athlete-dto';


@Injectable({
  providedIn: 'root'
})
export class RunService {

  constructor(private http: HttpClient,
                      @Inject('BACKEND_URL') private baseUrl: string) {}

  getOneAthlete(): Observable<AthleteDTO> {
    return this.http.get<AthleteDTO>(`${this.baseUrl}/athlete/1`);
  }

  getOneRun(activityid: number): Observable<PowerActivityDTO[]> {
    return this.http.get<PowerActivityDTO[]>(`${this.baseUrl}/poweractivity/athlete/1/activity/${activityid}`);
  }

  getOneStatistics(activityid): Observable<StatisticsPowerActivityDTO> {
    return this.http.get<StatisticsPowerActivityDTO>(`${this.baseUrl}/statisticsactivity/athlete/1/activity/${activityid}`);
  } 

}
