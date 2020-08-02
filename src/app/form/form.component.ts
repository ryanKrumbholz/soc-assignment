import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormControlName} from '@angular/forms';
import {InterfaceService} from '../interface-service.service';
import {DBService} from '../db-service.service';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})

export class FormComponent implements OnInit {
  active = false;

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    uname: ['', [Validators.required, Validators.pattern('[[^A-Za-z0-9]+')]],
    age: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
    addressLine: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$')]],
    unitNumber: ['', [ Validators.pattern('^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$')]],
    city: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    state: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    zip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
    employers: this.fb.array([]),
    experiences: this.fb.array([]),
    id: ['']
  });

  constructor(private state: InterfaceService, private data: DBService, private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.state.currFormState.subscribe(state => this.active = state);
  }

  getErrorMessage(type?: FormControlName) {

    if(type.errors.pattern) {return 'Field contains unsupported characters!'};

    if (type.errors.required) {return 'Field is required!'};

    if (type.errors.minLength) {return 'Field length is too short!'};

    if (type.errors.maxLength) {return 'Field length exceeds maximum length!'};

    if (type.errors.email) { return 'Not a valid email!'};

  }

  get employers() {
    return this.userForm.get('employers') as FormArray;
  }

  get experiences() {
    return this.userForm.get('experiences') as FormArray;
  }

  createNewExperience() {
    this.experiences.push(this.fb.group({
      title: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      date: ['', Validators.required],
      desc: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9,.!? ]*$')]]
    }));
  }

  createNewEmployment() {
    this.employers.push(this.fb.group({
      employer: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      title: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      startDate: ['', Validators.required],
      endDate: [''],
      desc: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9,.!? ]*$')]]
    }));
  }

  onSubmit() {
    this.data.addUser(this.userForm.value);
    this.userForm.reset();
    this.state.toggleForms();
  }

}
