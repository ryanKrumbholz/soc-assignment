import { Component, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DBService} from '../db-service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})



export class SearchbarComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private db: DBService) {}

  ngOnInit() {
    this.getOptions();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getOptions() {
    this.db.getUsers().subscribe(users => {
      for (let user of users) {
        this.options.push(user.firstName);
        this.options.push(user.lastName);
        this.options.push(user.firstName + ' ' + user.lastName);
        this.options.push(user.uname);
        this.options.push(user.city);
        this.options.push(user.age);
        this.options.push(user.addressLine);
        this.options.push(user.state);
        this.options.push(user.email);
        this.options.push(user.phoneNumber);
        this.options.push(user.zip);
        for (let employer of user.employers) {
          this.options.push(employer.employer);
          this.options.push(employer.title);
        }
      }
    });
  }
}
