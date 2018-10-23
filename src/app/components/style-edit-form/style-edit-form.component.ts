import { Component, Input, OnInit } from '@angular/core';
import { Style } from '../../models/style';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-style-edit-form',
  templateUrl: './style-edit-form.component.html',
  styles: []
})
export class StyleEditFormComponent implements OnInit {
  style: Style;
  onEditing = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  edit(style: Style) {
    this.style = JSON.parse(JSON.stringify(style));
    this.onEditing = true;
  }

  back() {
    this.onEditing = false;
  }

  save() {
    this.onEditing = false;
    this.dataService.updateStyle(this.style);
  }
}
