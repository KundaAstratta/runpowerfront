import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient,
    @Inject('BACKEND_URL') private baseUrl: string) {}


transformXMLtoActivity() {
  this.http.get(`${this.baseUrl}/fromXMLtoActivity`).subscribe();
}

transformActivityToPowerActivity() {
  this.http.get(`${this.baseUrl}/fromActivityToPowerActivity`).subscribe();
}

}
