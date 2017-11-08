import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CompanyUsersComponent} from './company-users/company-users.component';
import {SettingsComponent} from './settings/settings.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpModule} from '@angular/http';
import {CompanyService} from "./services/company.service";

@NgModule({
  declarations: [
    AppComponent,
    CompanyUsersComponent,
    SettingsComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpModule,
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
      }])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
