import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../services/company.service';
import {DialogService} from 'ng2-bootstrap-modal';
import {AddCompanyComponent} from '../add-company/add-company.component';
import {CompanyModel} from '../model/models';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-company-users',
  templateUrl: './company-users.component.html',
  styleUrls: ['./company-users.component.scss']
})
export class CompanyUsersComponent implements OnInit {
  companies: any;

  constructor(private service: CompanyService, private dialogService: DialogService) {
  }

  ngOnInit() {
    this.service.getCompanies()
      .subscribe((data: any) => {
        this.companies = data.companies;
      });
  }

  addNewCompanyUser() {
    this.dialogService.addDialog(AddCompanyComponent, {
      companyName: '',
      email: '',
      address: '',
      phoneNumber: null,
      dotNumber: null,
      mcNumber: null,
      packageName: '',
      active: false
    }, {
      backdropColor: 'rgba(0, 0, 0, 0.5)'
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
        }
      });
  }

  editCompany(company: CompanyModel) {
    this.dialogService.addDialog(AddCompanyComponent, {
      companyName: company.name,
      email: company.email,
      address: company.address,
      phoneNumber: company.phoneNum,
      dotNumber: company.dotNum,
      mcNumber: company.mcNum,
      packageName: company.accountsNum,
      active: company.active
    }, {
      backdropColor: 'rgba(0, 0, 0, 0.5)'
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
        }
      });
  }

}
