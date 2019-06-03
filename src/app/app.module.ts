import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app-component/app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { ListStringsComponentComponent } from './components/list-strings-component/list-strings-component.component';
import {MyServiceService} from './services/my-service.service';
import {FormsModule} from '@angular/forms';
import { SettingComponentComponent } from './components/setting-component/setting-component.component';
import { StringFilterComponentComponent } from './components/string-filter-component/string-filter-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    AddComponentComponent,
    ListStringsComponentComponent,
    SettingComponentComponent,
    StringFilterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
