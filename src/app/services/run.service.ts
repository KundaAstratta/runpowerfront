import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PowerActivityDTO } from '../shared-data/power-activity-dto';


@Injectable({
  providedIn: 'root'
})
export class RunService {

  constructor(private http: HttpClient,
                      @Inject('BACKEND_URL') private baseUrl: string) {}

  getOneRun(): Observable<PowerActivityDTO[]> {
    return this.http.get<PowerActivityDTO[]>(`${this.baseUrl}/poweractivity`);
  }

  /*
  transformXMLtoActivity() {
    this.http.get(`${this.baseUrl}/fromXMLtoActivity`).subscribe();
  }

  transformActivityToPowerActivity() {
    this.http.get(`${this.baseUrl}/fromActivityToPowerActivity`).subscribe();
  }
*/

}
