import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Robot } from './robot';

@Injectable({
  providedIn: 'root'
})
export class RobotService {


  private baseURL = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots";
  constructor(private httpClient: HttpClient) { }

  getRobotsList(): Observable<Robot[]>{
    return this.httpClient.get<Robot[]>(`${this.baseURL}`);
  }
}
