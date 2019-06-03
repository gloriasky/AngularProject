import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-strings-component',
  templateUrl: './list-strings-component.component.html'
})
export class ListStringsComponentComponent{
  @Output() resetIndex = new EventEmitter<number>();
  @Output() deletIndex = new EventEmitter<number>();

  @Input() strings = [];

  constructor() { }

  deleteString = index => this.deletIndex.emit(index);
  resetTimer = index => this.resetIndex.emit(index);
}
