import {Injectable} from '@angular/core';
import {Response, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  getCompanies() {
    return this.http.get('../../../assets/api/companies.json', {})
  }
}
