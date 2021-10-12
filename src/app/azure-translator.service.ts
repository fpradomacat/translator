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

  translate(apiKey: string, targetLanguage: string, value: string) {
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
      })
      .pipe(
        map(res => {
          let en = res[0].translations.find((x: any) => x.to === 'en').text.replace(/’/g, "'");
          let de = res[0].translations.find((x: any) => x.to === 'de').text.replace(/’/g, "'");
          let it = res[0].translations.find((x: any) => x.to === 'it').text.replace(/’/g, "'");
          let fr = res[0].translations.find((x: any) => x.to === 'fr').text.replace(/’/g, "'");
          let ca = res[0].translations.find((x: any) => x.to === 'ca').text.replace(/’/g, "'");
          let pt = res[0].translations.find((x: any) => x.to === 'pt').text.replace(/’/g, "'");

          let result = `--:${en}$#$en:${en}$#$es:${value}$#$de:${de}$#$it:${it}$#$fr:${fr}$#$ca:${ca}$#$pt:${pt}`;
          return result;
        })
      );
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
