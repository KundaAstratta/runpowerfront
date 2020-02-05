import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient,
    @Inject('BACKEND_URL') private baseUrl: string) {}


transformXMLtoActivity() {
  return this.http.get(`${this.baseUrl}/fromXMLtoActivity`);
}

transformActivityToPowerActivity() {
  return this.http.get(`${this.baseUrl}/fromActivityToPowerActivity`);
}

}
