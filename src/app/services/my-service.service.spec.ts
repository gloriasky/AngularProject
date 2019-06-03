import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';
let myService;
describe('MyServiceService', () => {
  beforeEach(() => {
    myService = new MyServiceService();
  });
  it('начальные настройки',  () => {
    expect(myService.strings).toBeDefined();
    expect(myService.strings.length).toBe(0);
    expect(myService.shouldStop).toBeDefined();
    expect(myService.shouldStop).toBe(true);
  });
  it('должен добавлять элементы в массив', () => {
    myService.addString('Hello world');

    expect(myService.strings.length).toBe(1);
    expect(myService.shouldStop).toBe(false);
  });
  it('должен удалять элемент с данным индексом из массива', () => {
    myService.addString('Hello world');
    myService.deleteString(0);

    expect(myService.strings.length).toBe(0);
    expect(myService.shouldStop).toBe(true);
  });
  it('должен сбрасывать таймер у элемента с определенным индексом', () => {
    const d = new Date();
    d.setSeconds(d.getSeconds() - 65);
    myService.strings[0] = {str: 'Hello world', color: 'red', time: d};
    myService.resetTimer(0);

    expect(myService.strings[0].color).toBe('green');
    expect(myService.shouldStop).toBe(false);
  });
  it('по прошествии 30 секунд должен изменить цвет элемента на желтый', () => {
    const d = new Date();
    d.setSeconds(d.getSeconds() - 30);
    myService.strings[0] = {str: 'Hello world', color: 'green', time: d};
    myService.colorCheck();

    expect(myService.strings[0].color).toBe('yellow');
  });
  it('по прошествии 60 секунд должен изменить цвет элемента на красный', () => {
    const d = new Date();
    d.setSeconds(d.getSeconds() - 65);
    myService.strings[0] = {str: 'Hello world', color: 'green', time: d};
    myService.colorCheck();

    expect(myService.strings[0].color).toBe('red');
  });
});
