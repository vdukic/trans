import {EventEmitter, Injectable} from '@angular/core';
import {Response, RequestOptions, Headers, Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {

  realodCompanies = new EventEmitter();

  constructor(private http: Http) {
  }

  getHeaders() {
    const headers = new Headers({
      'content-type': 'application/json'
    });
    const options = new RequestOptions({headers: headers});
    return options;
  }

  getCompanies() {
    const options = this.getHeaders();
    return this.http.get('http://seve.sytes.net/admin/company/getAll', options)
      .map((response: Response) => response.json());
  }

  saveCompany(data, oldEmail) {
    let url = 'http://seve.sytes.net/admin/company/create';
    const options = this.getHeaders();
    const params = {
      name: data.companyName,
      email: data.email,
      active: data.active,
      address: data.address,
      phoneNum: data.phoneNumber,
      dotNum: data.dotNumber,
      mcNum: data.mcNumber,
      accountsNum: data.packageName,
      currentEmail: oldEmail
    };
    if (oldEmail) {
      url = 'http://seve.sytes.net/admin/company/edit';
    }
    return this.http.post(url, JSON.stringify(params), options)
      .map((response: Response) => response.json());
  }
}
