import {Component, EventEmitter, Output} from '@angular/core';
import * as _ from 'lodash';
import {FormControl, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
})
export class AddComponentComponent{
  @Output() onAdd = new EventEmitter<string>();

  addString = () => {
    this.onAdd.emit(this.inputForm.value);
  };

  inputForm = new FormGroup({
    userStr: new FormControl('')
  });
}
