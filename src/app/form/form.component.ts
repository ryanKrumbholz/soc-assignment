import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  firstName = new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  lastName = new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  uname = new FormControl('',[Validators.required, Validators.pattern('[[^A-Za-z0-9]+')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phoneNumber = new FormControl('', [Validators.required, Validators.min(10), Validators.pattern('^[0-9]*$')]);

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
