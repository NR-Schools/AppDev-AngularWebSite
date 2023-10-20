import { Account } from "./account";
import { Dog } from "./dog";
import { DogAdopt } from "./dog-adopt";

export class Request {
    auth: Account;
    payload: Account | Dog | DogAdopt;

    constructor(_auth: Account, _payload: Account | Dog | DogAdopt)
    {
        this.auth = _auth;
        this.payload = _payload;
    }
}
