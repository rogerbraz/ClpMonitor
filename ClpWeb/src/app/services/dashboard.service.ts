import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnginePressures } from '../models/engine-pressure';
import { environment } from '../../environments/environment';

const API_DATA = environment.apiDataUrl;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urlPressaMotor = `${API_DATA}/pressao-motor/`;

  constructor(private http: HttpClient) { }

  getEnginePressure(): Observable<EnginePressures>{
    return this.http.get<EnginePressures>(this.urlPressaMotor);
  }
  
}
