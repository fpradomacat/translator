import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { AzureTranslatorService } from "./azure-translator.service";
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private azureTranslatorService : AzureTranslatorService) { }

  translate(apiKey: string, value: string): Observable<string> {
    // return of(value ? 'Prueba' : '').pipe(delay(1500));

    return this.azureTranslatorService
      .translate(apiKey, value)
      .pipe(
        map(res => {
          function getTranslation(language: string) {
            return res[0].translations
              .find((x: any) => x.to === language).text
              .replace(/[\u2018\u2019]/g, "'") //TO-DO check why it doesn't work
              // .replace(/[“”‘’]/g,'')
              .replace(/"/g, "'");
          }

          let en = getTranslation('en');
          let de = getTranslation('de');
          let it = getTranslation('it');
          let fr = getTranslation('fr');
          let ca = getTranslation('ca');
          let pt = getTranslation('pt');

          let result = `--:${en}$#$en:${en}$#$es:${value}$#$de:${de}$#$it:${it}$#$fr:${fr}$#$ca:${ca}$#$pt:${pt}`;
          return result;
        })
      );
  }
}
