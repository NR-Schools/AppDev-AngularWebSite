package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Request;
import com.rijai.LocationApi.model.Response;
import com.rijai.LocationApi.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class AccountController {
    @Autowired
    private IAccountService accountService;

    @RequestMapping("/api/account/signup")
    public Response userSignUp(@RequestBody Request request)
    {
        return new Response();
    }

    @RequestMapping("/api/account/login")
    public Response userLogIn(@RequestBody Request request)
    {
        return new Response();
    }

    @RequestMapping("/api/account/logout")
    public Response userLogOut(@RequestBody Request request)
    {
        return new Response();
    }
}
