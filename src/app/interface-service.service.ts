import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
  private formsStateSource = new BehaviorSubject(false);
  currFormState = this.formsStateSource.asObservable();
  private userWindowStateSource = new BehaviorSubject(false);
  currWindowState = this.userWindowStateSource.asObservable();
  private userDataSource = new BehaviorSubject(undefined);
  currUser = this.userDataSource.asObservable();

  constructor() { }

  toggleForms() {
    this.formsStateSource.next(!this.getFormState());
  }

  toggleUserWindow() {
    this.userWindowStateSource.next(!this.getWindowState());
  }

  setUser(user) {
    this.userDataSource.next(user);
  }

  getFormState() {
    let active;
    this.currFormState.subscribe(state => active = state);
    return active;
  }

  getWindowState() {
    let active;
    this.currWindowState.subscribe(state => active = state);
    return active;
  }

}
