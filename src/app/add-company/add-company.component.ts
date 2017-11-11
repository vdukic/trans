import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import {CompanyService} from "../services/company.service";

export interface FormModel {
  companyName: string;
  email: string;
  address: string;
  phoneNumber: number;
  dotNumber: number;
  mcNumber: number;
  packageName: string;
  active: boolean;
}

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})

export class AddCompanyComponent extends DialogComponent<FormModel, boolean> implements FormModel, OnInit {
  rForm: FormGroup;
  saveBtnTxt = 'Create User';
  oldEmail: string;
  companyName: string;
  nameError: string;
  email: string;
  emailError: string;
  address: string;
  phoneNumber: number;
  dotNumber: number;
  mcNumber: number;
  packageName: string;
  active: boolean;

  constructor(dialogService: DialogService, private fb: FormBuilder, private service: CompanyService) {
    super(dialogService);
  }

  ngOnInit() {
    if (this.email) {
      this.oldEmail = this.email;
      this.saveBtnTxt = 'Save';
    }
    this.rForm = this.fb.group({
      'companyName': [this.companyName, Validators.required],
      'email': [this.email, Validators.compose([Validators.required, Validators.email])],
      'address': [this.address, Validators.required],
      'phoneNumber': [this.phoneNumber, Validators.required],
      'dotNumber': [this.dotNumber, Validators.required],
      'mcNumber': [this.mcNumber, Validators.required],
      'packageName': [this.packageName, Validators.required],
      'active': [this.active]
    });
  }

  submit(data) {
    this.service.saveCompany(data, this.oldEmail)
      .subscribe((values) => {
        if (values.errors) {
          this.handleErrors(values.errors);
        } else if (values.finished) {
          this.service.realodCompanies.emit();
          this.closeDialog();
        }
      });
  }

  closeDialog() {
    this.result = null;
    this.close();
  }

  private handleErrors(errors) {
    const errorArray = ['email', 'name'];
    const me = this;
    for (const error in errors) {
      if (errorArray.includes(error)) {
        me[error + 'Error'] = errors[error];
      }
    }
  }
}
