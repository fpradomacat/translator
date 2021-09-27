import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AzureTranslatorService {

  constructor(private http: HttpClient) {
  }

  private url: string = 'https://api.cognitive.microsofttranslator.com/translate';

  translate(apiKey: string, targetLanguage: string, value: string): Observable<any> {

    // build headers
    //let headers: any = {};
    //headers['Ocp-Apim-Subscription-Key'] = "";
    //headers['Ocp-Apim-Subscription-Region'] = "";
    //headers['Content-Type'] = "application/json";

    return this.http.post(
      this.url + apiKey,
      value,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': '',
          'Ocp-Apim-Subscription-Region': '',
          'Content-type': 'application/json'
        },
        params: {
          'api-version': '3.0',
          'from': 'es',
          'to': targetLanguage
        }
      });
  }
}
