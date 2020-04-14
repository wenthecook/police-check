import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';

import { CustomerDataService } from '../customer-data.service';
import { Customer } from '../Customer';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  currentCustomer: Customer;

  form: FormGroup;
  uploadResponse;
  uploadReady = false;

  constructor(
    private customerDataService: CustomerDataService,
    private router: Router,
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
  ) { }

  ngOnInit(): void {
    this.getCurrentCustomer();
    // to build a form to upload a file
    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }

  onFileSelect(event) {
    // when a file is selected, this function will be called.
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);

    this.uploadService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    if (confirm('Are you ready to upload your file?')){
      this.router.navigate(['/success']);
    }
  }

  getCurrentCustomer() {
    this.currentCustomer = this.customerDataService.getCurrentCustomer();
  }

  goBack() {
    if (confirm('Do you want to go back and delete the input information?')){
      this.customerDataService.clear();
      this.router.navigate(['/']);
    }
  }

  // uploadFile(file) {
  //   // TODO: upload file to server
  //   this.router.navigate(['/success']);
  // }

}
