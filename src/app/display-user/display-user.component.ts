import { Component, OnInit } from '@angular/core';
import {InterfaceService} from '../interface-service.service';
import {DBService} from '../db-service.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.sass']
})

export class DisplayUserComponent implements OnInit {
  
  active = false;
  panelOpenState = false;
  startDate;
  endDate;
  user;


  constructor(private state: InterfaceService, private data: DBService) {}

  ngOnInit(): void {
    this.state.currWindowState.subscribe(state => this.active = state);
    this.state.currUser.subscribe(state => this.user = state);
  }

  formatDate(data) {
    return data ? data.toDate().getMonth() + 1 + '/' + data.toDate().getDate() + '/' +  data.toDate().getFullYear() : 'Present';
  }

  delUser() {
    this.data.delUser(this.user).then(x => this.close());
  }

  close() {
    this.state.toggleUserWindow();
  }

}
