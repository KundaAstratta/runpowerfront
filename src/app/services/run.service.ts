import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PowerActivityDTO } from '../shared-data/power-activity-dto';
import { StatisticsPowerActivityDTO } from '../shared-data/statistics-power-activity-dto';
import { AthleteDTO } from '../shared-data/athlete-dto';
import { ExternalConditionDTO } from '../shared-data/external-condition-dto';


@Injectable({
  providedIn: 'root'
})
export class RunService {

  constructor(private http: HttpClient,
                      @Inject('BACKEND_URL') private baseUrl: string) {}

  getOneAthleteById(athleteid: number): Observable<AthleteDTO> {
    return this.http.get<AthleteDTO>(`${this.baseUrl}/athlete/${athleteid}`);
  }

  getOneRun(idathlete : number, idactivity: number): Observable<PowerActivityDTO[]> {
    return this.http.get<PowerActivityDTO[]>(`${this.baseUrl}/poweractivity/athlete/${idathlete}/activity/${idactivity}`);
  }

  getOneStatistics(idathlete : number, idactivity: number): Observable<StatisticsPowerActivityDTO> {
    return this.http.get<StatisticsPowerActivityDTO>(`${this.baseUrl}/statisticsactivity/athlete/${idathlete}/activity/${idactivity}`);
  } 

  getOneExternalCondition(idathlete: number, idactivity: number) : Observable<ExternalConditionDTO> {
    return this.http.get<ExternalConditionDTO>(`${this.baseUrl}/externalcondition/athlete/${idathlete}/activity/${idactivity}`);
  }

}
