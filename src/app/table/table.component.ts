import { Component, OnInit } from '@angular/core';
import {InterfaceService} from '../interface-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {DBService} from '../db-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit{
  displayedColumns: string[] = ['name', 'city',
   'email', 'phoneNumber'];
  dataSource = new MatTableDataSource([]);

  constructor(private state: InterfaceService, private data: DBService) {
    data.getUsers().subscribe(users => this.dataSource = new MatTableDataSource(users));
   }

  ngOnInit(): void {
  }

  showUser(user) {
    this.state.setUser(user);
    this.state.toggleUserWindow();
    window.location.href='#bottom';
  }

  showForm() {
    this.state.toggleForms();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
