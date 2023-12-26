import { Injectable } from '@angular/core';
import { AppworksConfig } from 'src/utility/simsAppConfig';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';
@Injectable({
  providedIn: 'root'
})
export class SimsHttpCoreService {
url='';
  constructor(private http:HttpClient,private commonservice:CommonService) { 
    this.getCookies();
  }

  public getCookies(){
    const cookie = localStorage.getItem(AppworksConfig.cookieName);
    this.url = '/home'  + AppworksConfig.url + cookie;
  }
  public httpPost(data: any, header = { 'Content-Type': 'application/xml' }) {
    return this.http.post(this.url, data, { responseType: 'text' });
  }
}
