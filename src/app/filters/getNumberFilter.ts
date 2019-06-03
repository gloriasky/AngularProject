import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'getNumbers'})
export class GetNumbersPipe implements PipeTransform {
  transform(value: string): string {
    const str = _.replace(value, /[^\d]/gi, '');
    if (str === '') {
      return 'string';
    }
    return str;
  }
}
