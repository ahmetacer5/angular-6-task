import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Style } from './models/style';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  styleList: Style[];
  subscription: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.subscription = this.dataService
      .getStyleList()
      .subscribe((styleList: Style[]) => {
        this.styleList = styleList;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
