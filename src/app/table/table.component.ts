import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Experience {
  title: string;
  desc: string;
  date: Date;
}

export interface EmploymentHistory {
  employerName: string;
  title: string;
  startDate: Date;
  endDate: Date;
  status: boolean;
  desc: string;
}

export interface User {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  age: Number;
  // experience: Experience;
  // employmentHistory: EmploymentHistory;
}

const USER_DATA: User[] = [{
  name: 'Ryan K', 
  address: 'Washington, DC', 
  phoneNumber: '206-427-5234', 
  email: 'krumbholz98@gmail.com',
  age: 21
},
{
  name: 'test', 
  address: 'test', 
  phoneNumber: 'test', 
  email: 'test',
  age: 1
}];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit{
  displayedColumns: string[] = ['name', 'address',
   'email', 'phoneNumber', 'age'];
  dataSource = USER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  showForm() {
    //change form component class name to form-container
  }

}
