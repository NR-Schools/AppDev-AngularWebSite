import { Account } from './account';
import { Dog } from './dog';

export class DogAdopt {
  id?: number;
  dogInfo: Dog;
  requestUserInfo: Account;

  dateRequested: Date;
  dateAccepted?: Date;

  // If admin has response
  isRequestAccepted: boolean; // Server will always check for admin credentials before using this value

  constructor(_dog_info: Dog, _req_user_info: Account, _date_requested: Date) {
    // This is only created whenever user adopts dog
    this.dogInfo = _dog_info;
    this.requestUserInfo = _req_user_info;
    this.dateRequested = _date_requested;

    // By Default
    this.isRequestAccepted = false;
  }

  static NoDogAdopt(): DogAdopt {
    return new DogAdopt(Dog.NoDog(), new Account(), new Date());
  }
}
