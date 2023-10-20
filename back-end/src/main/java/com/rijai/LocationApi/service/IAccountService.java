package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Account;

public interface IAccountService {

    Account signUp(Account newAccount);
    Account login(Account existingAccount);
    Account logout(Account existingAccount);
}
