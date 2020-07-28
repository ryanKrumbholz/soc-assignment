import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-employment-field',
  templateUrl: './employment-field.component.html',
  styleUrls: ['./employment-field.component.sass']
})
export class EmploymentFieldComponent implements OnInit {

  employer = new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  title = new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  desc = new FormControl('',[Validators.required, Validators.pattern('[[^A-Za-z0-9]+')]);
  num;

  constructor() { }

  ngOnInit(): void {
    
  }

  getErrorMessage(type: FormControl) {
  
    if (type.hasError('required')) {
      return 'Field incomplete!';
    }

    if (type.hasError('email')) {
      return 'Not a valid email';
    }

    //define error case and messages for pattern error

  }

}
