import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AthleteDTO } from '../shared-data/athlete-dto';
import { ExternalConditionDTO } from '../shared-data/external-condition-dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient,
    @Inject('BACKEND_URL') private baseUrl: string) {}

  createOneExternalCondition(externalcondition : ExternalConditionDTO) {
      return this.http.post<ExternalConditionDTO>(`${this.baseUrl}/externalcondition/`,externalcondition);
  }

  createOneAthlete(athlete : AthleteDTO) {
      return this.http.post<AthleteDTO>(`${this.baseUrl}/athlete/`,athlete);
  }

  transformXMLtoActivity() {
     return this.http.get(`${this.baseUrl}/fromXMLtoActivity`);   
  }

  transformActivityToPowerActivity() {
    return this.http.get(`${this.baseUrl}/fromActivityToPowerActivity/athlete/1/activity/1`);
  }

  transformPowerActivityToStatistics() {
    return this.http.get(`${this.baseUrl}/fromPowerActivityToStatistics/athlete/1/activity/1`);
  }

}
