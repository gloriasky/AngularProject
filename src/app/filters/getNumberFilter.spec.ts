import {GetNumbersPipe} from './getNumberFilter';
import {MyServiceService} from '../services/my-service.service';

describe('getNumbers', () => {
  let getNumbersFilter;
  beforeEach(() => {
    getNumbersFilter = new GetNumbersPipe();
  });
  it('должен возвращать только цифры из строки', () => {
    expect(getNumbersFilter.transform('1test1')).toBe('11');
  });

  it('должен возвращать ключ \'string\' для строки, которая не содержит цифр', () => {
    expect(getNumbersFilter.transform('test')).toBe('string');
  });
});
