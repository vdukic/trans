import {Injectable} from '@angular/core';
import {Response, RequestOptions, Headers, Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {

  constructor(private http: Http) {
  }

  getHeaders() {
    const headers = new Headers({});
    const options = new RequestOptions({headers: headers});
    return options;
  }

  getCompanies() {
    const options = this.getHeaders();
    return this.http.get('http://104.131.60.250/seve/admin/company/getAll', options)
      .map((response: Response) => response.json());
  }

  saveCompany(data) {
    const options = this.getHeaders();
    const params = {
      name: 'gaerg',
      email: 'gaer@ymail.com',
      active: true,
      address: '27 f',
      phoneNum: '231321231',
      dotNum: '4234',
      mcNum: 'dwdw',
      accountNum: 222
    };
    return this.http.post('http://104.131.60.250/seve/admin/company/create', params, options)
      .map((response: Response) => response.json());
  }
}
