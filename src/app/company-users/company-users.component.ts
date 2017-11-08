import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../services/company.service";

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.scss']
})
export class CompanyUsersComponent implements OnInit {
  companies: any;

  constructor(private service: CompanyService) {
  }

  ngOnInit() {
    this.service.getCompanies()
      .subscribe((data: any) => {
        this.companies = data.companies;
      })
  }

}
