import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AthleteDTO } from '../shared-data/athlete-dto';
import { ExternalConditionDTO } from '../shared-data/external-condition-dto';
import { Message } from '../shared-data/message';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient,
    @Inject('BACKEND_URL') private baseUrl: string) {}

  async createExternalConditionToPrediction(externalcondition : ExternalConditionDTO) {
    return await this.http.post<ExternalConditionDTO>(`${this.baseUrl}/fromexternalconditiontoprediction/`,externalcondition).toPromise();
  }

  async createOneAthlete(athlete : AthleteDTO) {
      return await this.http.post<AthleteDTO>(`${this.baseUrl}/fromsavetoupdate/`,athlete).toPromise();
  }

  async transformXMLtoActivity(fileXML : string) {
     return await this.http.get<Message>(`${this.baseUrl}/fromXMLtoActivity/${fileXML}`).toPromise();   
  }

}
