export class User {
  public uid?: string;
  public username?: string;
  public email?: string;
  public password?: string;
  public status?: UserStatus;

  public constructor() {
    this.uid = null;
    this.username = null;
    this.email = null;
    this.password = null;
  }
}



export enum UserStatus {
  Online = 'online', Busy = 'busy', Offline = 'offline'
}
