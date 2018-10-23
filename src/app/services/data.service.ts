import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Style } from '../models/style';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subject = new Subject<Style[]>();
  recentData: Style[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('assets/json/datasource.json')
      .pipe(
        map((response: any) => {
          return response.styles;
        })
      )
      .subscribe((response: Style[]) => {
        this.subject.next(response);
        this.recentData = response;
      });
  }

  getStyleList() {
    return this.subject.asObservable();
  }

  updateStyle(style: Style) {
    const index = this.recentData.findIndex((x: Style) => x.StyleID === style.StyleID);
    this.recentData[index] = style;
    this.subject.next(this.recentData);
  }
}
