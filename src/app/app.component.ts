import { Component, OnInit } from '@angular/core';

import { CommonService } from './Services/common.service';
import { SimsHttpCoreService } from './Services/sims-http-core.service';
import { map, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-work-task';
 org:any;
 result:any;
 mngList: any[] = [];

  constructor(private commonservice:CommonService,private simshttp:SimsHttpCoreService){}
  ngOnInit(): void {
    this.org=this.commonservice.getOrganizationName();
    this.getManagerDetails()
  }
  getManagerDetails(){
     const dataRequest=`<manager_name>` + '' + `</manager_name>`
     const soapRequest = this.commonservice.getSoapBody('GetManagerDetails', 'http://schemas.cordys.com/purchaseflowdb', dataRequest);
     this.simshttp.httpPost(soapRequest).pipe(
      map(res=>this.commonservice.parseXML(res)),
      map(res2=>res2['SOAP:Envelope']['SOAP:Body']?.GetManagerDetailsResponse?.tuple)).subscribe(finalres=>{
        console.log(finalres);
        if(finalres){
          finalres.map( (element: any) =>{
            const mngList={
              mngname:element.old.manager_details.manager_name,
              mngid:element.old.manager_details.manager_id,
              mngemail:element.old.manager_details.manager_email,
              mnlocation:element.old.manager_details.manager_location
          }
          this.mngList.push(mngList)
          //console.log(mngList);
        })
        
        }
       
     })
     
  }
 

  
}
