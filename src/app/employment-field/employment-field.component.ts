import { Component, OnInit, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-employment-field',
  templateUrl: './employment-field.component.html',
  styleUrls: ['./employment-field.component.sass']
})
export class EmploymentFieldComponent implements OnInit {
  employer;
  title;
  desc;
  startDate;
  endDate;
  status = true;
  elem;
  arr;
  
  @Input() data;

  constructor() { }

  ngOnInit(): void {
    this.elem = this.data[0].controls;
    this.arr = this.data[1].controls;
    this.employer = this.elem.employer;
    this.title = this.elem.title;
    this.desc = this.elem.desc;
    this.startDate = this.elem.startDate;
    this.endDate = this.elem.endDate;
  }

  getErrorMessage(type?: FormControl) {

    if(type.errors.pattern) {return 'Field contains unsupported characters!'};

    if (type.errors.required) {return 'Field is required!'};

    if (type.errors.minLength) {return 'Field length is too short!'};

    if (type.errors.maxLength) {return 'Field length exceeds maximum length!'};

    if (type.errors.email) { return 'Not a valid email!'};

  }

  checkboxOnSelect() {
    this.status = !this.status;
    (!this.status) ? (this.endDate.disable(), this.endDate.value = 'present') : this.endDate.enable();
  }

  delete() {
    let index = this.arr.indexOf(this.elem);
    this.arr = this.arr.splice(index, 1);
  }

}
