export class Account {
    email?: string; // For Admin, email will always be Admin
    password?: string;
    
    auth_string?: string;

    signup_login(_email: string, _password: string)
    {
        this.email = _email;
        this.password = _password;
    }

    get_auth_string()
    {
        return this.auth_string;
    }

    set_auth_string(_auth_string: string)
    {
        this.auth_string = _auth_string;
    }
}
