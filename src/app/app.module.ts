import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CompanyUsersComponent} from './company-users/company-users.component';
import {SettingsComponent} from './settings/settings.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFontAwesomeModule} from "angular-font-awesome";

@NgModule({
  declarations: [
    AppComponent,
    CompanyUsersComponent,
    SettingsComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      component: CompanyUsersComponent
    }, {
      path: 'companyUsers',
      component: CompanyUsersComponent
    },
      {
        path: 'settings',
        component: SettingsComponent
      }]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
