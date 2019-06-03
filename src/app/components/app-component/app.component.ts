import { Component } from '@angular/core';
import {MyServiceService} from '../../services/my-service.service';
import {Model} from '../../classes/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  strings = this.service.strings;
  filterObj: Model;
  colorChangeInterval;
  colors = ['green', 'yellow', 'red'];

  constructor(private service: MyServiceService) {}

  addString = (newStr) => {
    this.service.addString(newStr.userStr);
    this.filterArray();
    this.startInterval();
  };

  reset = (index: number) => {
    this.service.resetTimer(index);
    this.startInterval();
  };

  delete = (index: number) => this.service.deleteString(index);

  onFilterObjChange = (filter: Model) => {
    this.filterObj = filter;
    this.filterArray();
  };

  filterArray() {
    if (this.filterObj !== undefined) {
      this.strings = this.service.filterArray(this.filterObj);
    }
  };

  startInterval = () => {
    if (!this.colorChangeInterval) {
      this.colorChangeInterval = setInterval(() => {
        if (!this.service.shouldStop) {
          this.service.colorCheck();
        } else {
          clearInterval(this.colorChangeInterval);
          this.colorChangeInterval = undefined;
        }
      }, 1000);
    }
  };
}
