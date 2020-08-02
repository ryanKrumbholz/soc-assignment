import { Component, OnInit } from '@angular/core';
import {InterfaceService} from '../interface-service.service';
import {DBService} from '../db-service.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.sass']
})

export class DisplayUserComponent implements OnInit {
  active = false; // State of whether window is currently visible or not.
  panelOpenState = false; // State of whether panel is expanded or collapsed.
  user;

  constructor(private state: InterfaceService, private data: DBService) {}

  ngOnInit(): void {
    // Subscribing to currWindowState to keep track of current state within the service.
    this.state.currWindowState.subscribe(state => this.active = state);

    // Subscribing to current user within DBService to get currently selected user.
    this.state.currUser.subscribe(state => this.user = state);
  }

  formatDate(date) {
    //Takes in a date in nano seconds and returns it as a string in format of  mm/dd/yy.
    return date ? date.toDate().getMonth() + 1 + '/' + date.toDate().getDate() + '/' +  date.toDate().getFullYear() : 'Present';
  }

  delUser() {
    // Calls DBService to delete selected user then closes window after receiving promise.
    this.data.delUser(this.user).then(x => this.close());
  }

  close() {
    // Calls interface Service to change state of window to current opposite state.
    this.state.toggleUserWindow();
  }

}
