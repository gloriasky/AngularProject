import { Injectable } from '@angular/core';
import {Model} from '../classes/model';
import { GetNumbersPipe} from '../filters/getNumberFilter';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  strings = [];
  shouldStop = true;
  filter = new GetNumbersPipe();

  constructor() {}

  addString(str: string) {
    this.strings.push(new Model(str, 'green', this.filter.transform(str), new Date()));
    this.shouldStop = false;
  };

  resetTimer(idx: number) {
    this.strings[idx].time = new Date();
    this.strings[idx].color = 'green';
    this.shouldStop = false;
  };

  deleteString(idx: number) {
    _.remove(this.strings, (element) => {
      return _.indexOf(this.strings, element) === idx;
    });
    this.colorCheck();
  };

  colorCheck() {
    const dateNow = new Date();
    this.shouldStop = _.every(this.strings, (str) => {
      return str.color === 'red';
    });
    if (!this.shouldStop) {
      _.each(this.strings, (element) => {
        if (element.color !== 'red') {
          const numOfSeconds = (dateNow.getTime() - element.time.getTime()) / 1000;
          if (numOfSeconds >= 30 && numOfSeconds <= 60) {
            element.color = 'yellow';
          } else if (numOfSeconds > 60) {
            element.color = 'red';
          }
        }
      });
    }
  };
  filterArray(filterObj: Model): Model[] {
    return this.strings.filter((element: Model) => {
      return element.strLabel.startsWith(filterObj.str) && element.color.startsWith(filterObj.color);
    });
  }
  changeLanguage = () => {
    _.forEach(this.strings, (element) => {
      element.strLabel = this.filter.transform(element.str);
    });
  }
}
