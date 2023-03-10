import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GapluServiceService {

  constructor(private httpClient: HttpClient) {

  }

  get(url: any) {
    return this.httpClient.get(url);
  }

  post(url: any, data: any) {
    return this.httpClient.post(url, data);
  }

  put(url: any, data: any) {
    return this.httpClient.put(url, data);
  }

}
