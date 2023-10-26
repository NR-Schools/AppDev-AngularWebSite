export class Account {
  id?: number;
  username?: string;
  email?: string; // For Admin, email will always be Admin
  password?: string;

  sessionAuthString?: string;

  signup(_username: string, _email: string, _password: string) {
    this.username = _username;
    this.email = _email;
    this.password = _password;
  }

  login(_email: string, _password: string) {
    this.email = _email;
    this.password = _password;
  }
}
