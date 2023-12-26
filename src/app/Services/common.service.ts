import { Injectable } from '@angular/core';
import { AppworksConfig } from 'src/utility/simsAppConfig';
//import xml2js from 'xml2js';
import {XMLParser} from 'fast-xml-parser';




@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  parseXML(data: any) {
    // return new Promise(resolve => {
      const  arr = [];
      const  parser = new XMLParser();
      return parser.parse(data)
      // resolve(parser);
      // parser.parseString(data, (err: any, result: unknown) => {
      //   resolve(result);
      // });
    // });
  }

  getSoapBody(serviceName: any, nameSpace: any, dataRequest: any) {
    const soapRequest = '<SOAP:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/">' +
      '<SOAP:Body>' +
      '<' + serviceName + ' xmlns="' + nameSpace + '"  qAccess="0" qValues="">' +
      dataRequest +
      '</' + serviceName + '>' +
      '</SOAP:Body>' +
      '</SOAP:Envelope>';
    const parser = new DOMParser();
    parser.parseFromString(soapRequest, 'text/xml');
    return soapRequest;
  }
  getOrganizationName() {
    return AppworksConfig.organizationName;
  }
 
}

