import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

import {User as ApplicationUser, UserStatus} from '../models/user';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  public createUser(userToCreate: ApplicationUser): void {
    const path = `users/${userToCreate.uid}`;

    const newUserData: ApplicationUser = {
      uid: userToCreate.uid,
      email: userToCreate.email,
      username: userToCreate.username,
      status: UserStatus.Offline
    };

    this.db.object(path).update(newUserData)
      .catch(error => console.log(error));
  }

  public updateUserStatus(userUID: string, status: UserStatus): void {
    const firebaseDbSubscription: Subscription = this.db.object(`users/${userUID}`).valueChanges().subscribe((chatUser: ApplicationUser) => {
      chatUser.status = status;
      this.db.object(`users/${chatUser.uid}`).update(chatUser);

      firebaseDbSubscription.unsubscribe();
    });
  }

  public getUserByUID(userUID: string): Observable<ApplicationUser> {
    return this.db.object(`users/${userUID}`).valueChanges();
  }
}
