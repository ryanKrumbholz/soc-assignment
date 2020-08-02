import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-experience-field',
  templateUrl: './experience-field.component.html',
  styleUrls: ['./experience-field.component.sass']
})
export class ExperienceFieldComponent implements OnInit {
  title;
  desc;
  date;
  elem;
  arr;
  
  @Input() data;

  constructor() { }

  ngOnInit(): void {
    this.elem = this.data[0].controls;
    this.arr = this.data[1].controls;
    this.title = this.elem.title;
    this.desc = this.elem.desc;
    this.date = this.elem.date;
  }

  getErrorMessage(type?: FormControl) {

    if(type.errors.pattern) {return 'Field contains unsupported characters!'};

    if (type.errors.required) {return 'Field is required!'};

    if (type.errors.minLength) {return 'Field length is too short!'};

    if (type.errors.maxLength) {return 'Field length exceeds maximum length!'};

    if (type.errors.email) { return 'Not a valid email!'};

  }

  formatDate(data) {
    return data ? data.getMonth() + 1 + '/' + data.getDate() + '/' +  data.getFullYear() : 'Present';
  }

  delete() {
    let index = this.arr.indexOf(this.elem);
    this.arr = this.arr.splice(index, 1);
  }


}
