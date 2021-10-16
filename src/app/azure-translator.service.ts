import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AzureTranslatorService {

  constructor(private http: HttpClient) {
  }

  private baseUrl: string = 'https://api.cognitive.microsofttranslator.com';
  private endpoint: string = '/translate';

  translate(apiKey: string, value: string): Observable<any> {
    return this.http.post<Array<any>>(
      this.baseUrl + this.endpoint,
      [{text: value}],
      {
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
          'Ocp-Apim-Subscription-Region': 'westeurope',
          'Content-type': 'application/json'
        },
        params: {
          'api-version': '3.0',
          'from': 'es',
          'to': ["en", "de", "it", "fr", "ca", "pt"]
        }
      });
  }

}
