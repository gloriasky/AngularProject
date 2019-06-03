import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html'
})
export class NavbarComponentComponent{
  private userName = '';
  private settingDisplay = false;

  constructor() { }

  display = () => this.settingDisplay = true;
  close = () => this.settingDisplay = false;
  onUserNameChange = (newName) => this.userName = newName;

  getUserName = function() {
    return this.userName;
  };
  getSettingDisplay = function() {
    return this.settingDisplay;
  }
}
