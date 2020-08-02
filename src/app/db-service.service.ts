import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private users: Observable<any[]>;
  private usersCollection:  AngularFirestoreCollection;


  constructor(private firestore: AngularFirestore) {
    this.usersCollection = firestore.collection('users');
    this.users = this.usersCollection.valueChanges();
   }

   getUsers() {
     return this.users;
   }

   addUser(user) {
     user.id = Date.now().toString();
     return this.usersCollection.doc(user.id).set(user);
   }

   delUser(user) {
     return this.usersCollection.doc(user.id).delete();
   }
}
