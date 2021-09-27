import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslatorService {

  constructor(private http: HttpClient) {
  }

  private url: string = 'https://translation.googleapis.com/language/translate/v2?key=';

  translate(apiKey: string, value: string): Observable<any> {
    return this.http.post(this.url + apiKey, value);
  }
}
