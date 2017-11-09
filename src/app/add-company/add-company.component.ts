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
  companyName: '';
  email: '';
  address: '';
  phoneNumber: number;
  dotNumber: number;
  mcNumber: number;
  packageName: string;
  active: boolean;

  constructor(dialogService: DialogService, private fb: FormBuilder, private service: CompanyService) {
    super(dialogService);
    this.rForm = fb.group({
      'companyName': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'address': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'dotNumber': [null, Validators.required],
      'mcNumber': [null, Validators.required],
      'packageName': [null, Validators.required],
      'active': [false]
    });
  }

  ngOnInit() {
    this.rForm.controls['companyName'].setValue(this.companyName);
  }

  submit(data) {
    this.service.saveCompany(data)
      .subscribe((values) => {
      });
  }

  closeDialog() {
    this.result = null;
    this.close();
  }

}
