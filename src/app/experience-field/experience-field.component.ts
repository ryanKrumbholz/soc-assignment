import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-experience-field',
  templateUrl: './experience-field.component.html',
  styleUrls: ['./experience-field.component.sass']
})
export class ExperienceFieldComponent implements OnInit {
  employer = new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]);
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
