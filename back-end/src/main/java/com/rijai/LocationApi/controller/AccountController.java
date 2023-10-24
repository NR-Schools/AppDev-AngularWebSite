package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Account;
import com.rijai.LocationApi.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class AccountController {
    @Autowired
    private IAccountService accountService;

    @RequestMapping(value = "/api/account/signup", method = RequestMethod.POST)
    public boolean userSignUp(@RequestBody Account account)
    {
        Account newAccount = accountService.signUp(account);
        if (newAccount == null) return false;
        return true;
    }

    @RequestMapping(value = "/api/account/login", method = RequestMethod.POST)
    public Account userLogIn(@RequestBody Account account)
    {
        Account existingAccount = accountService.login(account);

        if (existingAccount == null) return null;
        existingAccount.setPassword("");
        return existingAccount;
    }

    @RequestMapping(value = "/api/account/logout", method = RequestMethod.POST)
    public Account userLogOut(@RequestBody Account account)
    {
        Account existingAccount = accountService.logout(account);

        if (existingAccount == null) return null;
        existingAccount.setPassword("");
        return existingAccount;
    }
}
