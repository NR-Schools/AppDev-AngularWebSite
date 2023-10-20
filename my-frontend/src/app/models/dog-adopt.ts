import { Account } from "./account";
import { Dog } from "./dog";

export class DogAdopt {
    id?: number;
    dogInfo: Dog;
    requestUserInfo: Account;
    
    // If admin has response
    isAccepted: boolean;   // Server will always check for admin credentials before using this value

    constructor(_dog_info: Dog, _req_user_info: Account)
    {
        // This is only created whenever user adopts dog
        this.dogInfo = _dog_info;
        this.requestUserInfo = _req_user_info;

        // By Default
        this.isAccepted = false;
    }

    confirmRequest()
    {
        this.isAccepted = true;
    }
}
