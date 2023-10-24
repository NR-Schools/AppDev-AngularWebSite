package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Account;
import com.rijai.LocationApi.model.DogAdopt;
import com.rijai.LocationApi.service.IAccountService;
import com.rijai.LocationApi.service.IDogAdoptService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class DogAdoptController {

    @Autowired
    private IAccountService accountService;
    @Autowired
    private IDogAdoptService dogAdoptService;

    @PostMapping("api/dog-adopt/user-dog-adopt")
    public DogAdopt userAdoptDog(
        @RequestHeader(name = "email", required = false) String email,
        @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
        @RequestBody DogAdopt dogAdopt)
    {
        DogAdopt newDogAdopt = dogAdoptService.userAdoptDog(dogAdopt);

        return newDogAdopt;
    }

    @PostMapping("api/dog-adopt/user-view-all-dog-adopt")
    public List<DogAdopt> userViewAllDogAdopt(
        @RequestHeader(name = "email", required = false) String email,
        @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString) {

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        List<DogAdopt> pendingDogAdopts = dogAdoptService.userViewAllDogAdopt(reqAccount);

        return pendingDogAdopts;
    }

    @PostMapping("api/dog-adopt/admin-confirm-dog-adopt")
    public DogAdopt adminConfirmDogAdopt(
        @RequestHeader(name = "email", required = false) String email,
        @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
        @RequestBody DogAdopt dogAdopt) {
        
        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        // Check if Admin
        if (!accountService.isAdmin(reqAccount)) {
            return null;
        }

        return dogAdoptService.adminConfirmDogAdapt(dogAdopt);
    }

    @PostMapping("api/dog-adopt/admin-view-all-confirm-dog-adopt")
    public List<DogAdopt> adminViewAllConfirmDogAdopt(
        @RequestHeader(name = "email", required = false) String email,
        @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString) {

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        // Check if Admin
        if (!accountService.isAdmin(reqAccount)) {
            return List.of();
        }

        return dogAdoptService.adminViewAllConfirmDogAdopt();
    }
}
