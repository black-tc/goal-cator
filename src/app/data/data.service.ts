import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './data.interface';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  //firebase URL.
  url: string = 'https://goal-cator-77502-default-rtdb.firebaseio.com/points';

  //this method post the data to the firebase.
  post(data: data) {
    return this.http.post<data>(this.url, data, { observe: 'response' });
  }

  //this method get the data from firebase.
  get() {
    return this.http.get<data>(this.url);
  }
}
