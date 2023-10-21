export class Account {
  id?: number;
  email?: string; // For Admin, email will always be Admin
  password?: string;

  sessionAuthString?: string;

  signup_login(_email: string, _password: string) {
    this.email = _email;
    this.password = _password;
  }
}
