package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Account;
import com.rijai.LocationApi.model.Request;
import com.rijai.LocationApi.model.Response;
import com.rijai.LocationApi.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class AccountController {
    @Autowired
    private IAccountService accountService;

    @RequestMapping(value = "/api/account/signup", method = RequestMethod.POST)
    public Response userSignUp(@RequestBody Request request)
    {
        Response response = new Response();
        Account newAccount = accountService.signUp(request.accountPayload);

        if (newAccount == null) response.status = "failed";
        else response.status = "success";

        response.result = newAccount;
        return response;
    }

    @RequestMapping(value = "/api/account/login", method = RequestMethod.POST)
    public Response userLogIn(@RequestBody Request request)
    {
        Response response = new Response();
        Account existingAccount = accountService.login(request.accountPayload);

        if (existingAccount == null) response.status = "failed";
        else response.status = "success";

        response.result = existingAccount;
        return response;
    }

    @RequestMapping(value = "/api/account/logout", method = RequestMethod.POST)
    public Response userLogOut(@RequestBody Request request)
    {
        Response response = new Response();
        Account existingAccount = accountService.logout(request.accountPayload);

        if (existingAccount == null) response.status = "failed";
        else response.status = "success";

        response.result = existingAccount;
        return response;
    }
}
