import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-component',
  templateUrl: './setting-component.component.html'
})
export class SettingComponentComponent {
  @Output() close = new EventEmitter<boolean>();
  @Output() onUserNameChange = new EventEmitter<string>();

  @Input() userName: string;

  private langs = ['en','ru','de'];
  private currentLang = 'ru';

  constructor() { }

  hide = () => this.close.emit(false);

  sendName = () => {
    this.onUserNameChange.emit(this.userName);
    this.hide();
  };

  reset = () => {
    this.userName = '';
    this.sendName();
  };

  getLangs = function() {
    return this.langs;
  }
}
