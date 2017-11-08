import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../services/company.service';
import {DialogService} from 'ng2-bootstrap-modal';
import {AddCompanyComponent} from '../add-company/add-company.component';

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
      closeByClickingOutside: true,
      backdropColor: 'rgba(0, 0, 0, 0.5)'
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
        }
      });
  }

}
