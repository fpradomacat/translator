import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AzureTranslatorService {

  constructor(private http: HttpClient) {
  }

  private baseUrl: string = 'https://api.cognitive.microsofttranslator.com';
  private endpoint: string = '/translate';

  translate(apiKey: string, targetLanguage: string, value: string): Observable<any> {
    return this.callApi(apiKey, targetLanguage, value)
    .pipe(
      map(x => {
      let multiLanguageString:string = "";

      x[0].translations.forEach(
        translation => {
          multiLanguageString += ':--';
          multiLanguageString += translation['text'];
        }
      );
      // for (let translation in x[0].translations ){
      //   multiLanguageString += ':--';
      //   multiLanguageString += translation['text'];
      // }

      return multiLanguageString;
    })
    ).first();

  }

  callApi(apiKey: string, targetLanguage: string, value: string): Observable<any> {
    return this.http.post(
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
