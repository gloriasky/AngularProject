import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Model} from '../../classes/model';

@Component({
  selector: 'app-string-filter-component',
  templateUrl: './string-filter-component.component.html'
})
export class StringFilterComponentComponent{
  @Output() onFilterObjChange = new EventEmitter<Model>();

  @Input() colors = [];

  currentColor = '';
  neededString = '';

  constructor() { }

  filterArray() {
    this.onFilterObjChange.emit(new Model(this.neededString, this.currentColor, null, null));
  };

  resetFilter() {
    this.currentColor = '';
    this.neededString = '';
    this.onFilterObjChange.emit(new Model(this.neededString, this.currentColor, null, null));
  }
}
