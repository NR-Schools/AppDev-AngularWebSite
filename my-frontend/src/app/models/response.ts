import { Dog } from "./dog";
import { DogAdopt } from "./dog-adopt";

export class Response {
    status: 'success' | 'failed';
    result: Dog | DogAdopt;

    constructor(_status: 'success' | 'failed', _result: Dog | DogAdopt)
    {
        this.status = _status;
        this.result = _result;
    }
}
