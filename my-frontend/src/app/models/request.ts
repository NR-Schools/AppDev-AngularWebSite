import { Account } from "./account";
import { Dog } from "./dog";
import { DogAdopt } from "./dog-adopt";

export class Request {
    auth?: Account;
    accountPayload?: Account;
    dogPayload?: Dog;
    dogAdoptPayload?: DogAdopt;

    setAuthData(_auth: Account)
    {
        this.auth = _auth;
    }

    setAccountPayload(_accountPayload: Account)
    {
        this.accountPayload = _accountPayload;
    }

    setDogPayload(_dogPayload: Dog)
    {
        this.dogPayload = _dogPayload;
    }

    setDogAdoptPayload(_dogAdoptPayload: DogAdopt)
    {
        this.dogAdoptPayload = _dogAdoptPayload;
    }
}
