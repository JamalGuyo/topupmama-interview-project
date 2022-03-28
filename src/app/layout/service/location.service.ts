import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  // getAddress(ip: string): Observable<any> {
  // return this.http.get<any>(
  //   `https://geocode-api.arcgis.com/arcgis/rest/services/[myGeocodeServiceName]/GeocodeServer/reverseGeocode?f=json&featureTypes=&location=-117.205416,34.038074`,
  //   {
  //     params: {
  //       f: 'json',
  //       token:
  //         'AAPK11b18097064f4838b4d68614e43e699dwtD-aY6V6qGGPI2mLGvY7qPGbktwa8UolAcV0BwyVAJqK1HpBNmZObP0sCLxKsn1',
  //     },
  //   }
  // );
  // }

  getIPAddress() {
    return this.http.get('http://ip-api.com/json/?fields=61439');
  }
}
