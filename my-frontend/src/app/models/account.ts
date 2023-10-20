export class Account {
    id?: number;
    email?: string; // For Admin, email will always be Admin
    password?: string;
    
    sessionAuthString?: string;

    signup_login(_email: string, _password: string)
    {
        this.email = _email;
        this.password = _password;
    }

    get_auth_string()
    {
        return this.sessionAuthString;
    }

    set_auth_string(_auth_string: string)
    {
        this.sessionAuthString = _auth_string;
    }
}
