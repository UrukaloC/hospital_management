import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

import {UserService} from './user.service';
import {ErrorMessage} from '../models/error-message';
import {User as ApplicationUser, UserStatus} from '../models/user';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class AuthenticationService {
  isLoggedIn(): any {
    throw new Error("Method not implemented.");
  }
  private authorizeRoute$: Observable<boolean>;
  private loggedInUser$: Observable<ApplicationUser>;

  constructor(private afAuth: AngularFireAuth, private userService: UserService, private router: Router) {
    this.authorizeRoute();
    this.tryToGetLoggedInUser();
  }



  /**
   *
   * @param {User} userToCreate
   * @param {ErrorMessage} errorMessage
   * @returns {Promise<void>}
   */
  public signUp(userToCreate: ApplicationUser, errorMessage: ErrorMessage): Promise<void> {
    return this.afAuth.auth.createUserWithEmailAndPassword(userToCreate.email, userToCreate.password)
      .then((firebaseResponse) => {
        userToCreate.uid = firebaseResponse.user.uid;

        this.userService.createUser(userToCreate);
        this.router.navigate(['/login', {userRegistered: true}]);
      }).catch(error => {
        errorMessage.message = error.message;
        errorMessage.isMessageShown = true;
      });
  }

  public login(email: string, password: string, errorMessage: ErrorMessage) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        let afSubscription: Subscription = this.afAuth.authState.subscribe((firebaseUser) => {
          afSubscription.unsubscribe();

          this.userService.updateUserStatus(firebaseUser.uid, UserStatus.Online);
          // putanja ka home stranici prilikom logovanja
          this.router.navigate(['/homepage']);
        });
      })
      .catch((error) => {
        errorMessage.message = error.message;
        errorMessage.isMessageShown = true;
      });
  }

  public logout(): void {
    let userUID = null;

    let afSubscription: Subscription = this.afAuth.authState.subscribe((firebaseUser) => {
      userUID = firebaseUser.uid;
      afSubscription.unsubscribe();

      this.afAuth.auth.signOut().then(() => {
        this.userService.updateUserStatus(userUID, UserStatus.Offline);
      });
    });
  }

  public isRouteProtected(): Observable<boolean> {
    return this.authorizeRoute$;
  }

  public getLoggedInUser(): Observable<ApplicationUser> {
    return this.loggedInUser$;
  }

  private authorizeRoute(): void {
    this.authorizeRoute$ = new Observable((observer) => {
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          observer.next(true);
        } else {
          observer.next(false);
          this.router.navigate(['/login']);
        }
      });
    });
  }

  private tryToGetLoggedInUser(logoutInitiated?: boolean): void {
    this.loggedInUser$ = new Observable((observer) => {
      this.afAuth.authState.subscribe((firebaseUser) => {
        if (firebaseUser) {
          let sub: Subscription = this.userService.getUserByUID(firebaseUser.uid).subscribe((user) => {
            sub.unsubscribe();
            observer.next(user);
          });
        } else {
          observer.next(new ApplicationUser());
        }
      });
    });
  }
}
