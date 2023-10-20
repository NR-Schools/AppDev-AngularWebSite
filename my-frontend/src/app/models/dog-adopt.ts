import { Account } from "./account";
import { Dog } from "./dog";

export class DogAdopt {
    dog_info: Dog;
    req_user_info: Account;
    
    // If admin has response
    req_admin_info?: Account;
    is_accepted: boolean;   // Server will always check for admin credentials before using this value

    constructor(_dog_info: Dog, _req_user_info: Account)
    {
        // This is only created whenever user adopts dog
        this.dog_info = _dog_info;
        this.req_user_info = _req_user_info;

        // By Default
        this.is_accepted = false;
    }

    set_admin_response(_req_admin_info: Account)
    {
        this.req_admin_info = _req_admin_info;
        this.is_accepted = true;
    }
}
