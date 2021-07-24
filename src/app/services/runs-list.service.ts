import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatisticsPowerActivityDTO } from '../shared-data/statistics-power-activity-dto';
import { PredictionDTO } from '../shared-data/prediction-dto';
import { AthleteDTO } from '../shared-data/athlete-dto';

@Injectable({
  providedIn: 'root'
})

export class RunsListService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private baseUrl: string) { }

  getOneAthleteById(athleteid: number): Observable<AthleteDTO> {
    return this.http.get<AthleteDTO>(`${this.baseUrl}/athlete/${athleteid}`);
  }

  getAllStatisticsActivityForOneAthlete(idathlete:number): Observable<StatisticsPowerActivityDTO[]> {
    return this.http.get<StatisticsPowerActivityDTO[]>(`${this.baseUrl}/statisticsactivity/athlete/${idathlete}`);
  }

  getLastPredictionForOneAthlete(idathlete:number) : Observable<PredictionDTO> {
    return this.http.get<PredictionDTO>(`${this.baseUrl}/prediction/last/${idathlete}`);
  }

}
