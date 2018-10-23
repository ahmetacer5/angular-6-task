import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-card',
  templateUrl: './style-card.component.html',
  styles: []
})
export class StyleCardComponent implements OnInit {
  @Input() styleData: any;

  constructor() {
  }

  ngOnInit() {
  }
}
