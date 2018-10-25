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
    this.loadData(); // Initial Data Load.
  }

  /**
   * Loads DataSource from Json File.
   */
  loadData() {
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


  /**
   * Returns Observable of DataSource.
   */
  getStyleList() {
    return this.subject.asObservable();
  }

  /**
   * Updates Current DataSource With Given style parameter.
   * @param style
   */
  updateStyle(style: Style) {
    const index = this.recentData.findIndex((x: Style) => x.StyleID === style.StyleID);
    this.recentData[index] = style;
    this.subject.next(this.recentData);
  }
}
