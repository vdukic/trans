import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CompanyUsersComponent} from './company-users/company-users.component';
import {SettingsComponent} from './settings/settings.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpModule} from '@angular/http';
import {CompanyService} from './services/company.service';
import {AddCompanyComponent} from './add-company/add-company.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BootstrapModalModule, DialogService} from 'ng2-bootstrap-modal';

@NgModule({
  declarations: [
    AppComponent,
    CompanyUsersComponent,
    SettingsComponent,
    AddCompanyComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BootstrapModalModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
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
  entryComponents: [
    AddCompanyComponent
  ],
  providers: [CompanyService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
