import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _registerUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD8M-G1KW5k1ieJZX6p1qSb8X-rmt1PGSo&callback=myMap";
  constructor(private http: HttpClient) { }

  
}
