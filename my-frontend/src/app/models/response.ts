import { Account } from "./account";
import { Dog } from "./dog";
import { DogAdopt } from "./dog-adopt";

export class Response {
    status: 'success' | 'failed';
    result: Account | Dog | DogAdopt | Array<Dog> | Array<DogAdopt>;

    constructor(_status: 'success' | 'failed', _result: Account | Dog | DogAdopt | Array<Dog> | Array<DogAdopt>)
    {
        this.status = _status;
        this.result = _result;
    }
}
