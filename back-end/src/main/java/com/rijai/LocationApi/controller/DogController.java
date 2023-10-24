package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Account;
import com.rijai.LocationApi.model.Dog;
import com.rijai.LocationApi.service.IAccountService;
import com.rijai.LocationApi.service.IDogService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class DogController {
    @Autowired
    private IAccountService accountService;
    @Autowired
    private IDogService dogService;

    @PostMapping("/api/dog/add-dog")
    public boolean addNewDog(
            @RequestHeader(name = "email", required = false) String email,
            @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
            @RequestBody Dog dog) {

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        // Check if Admin
        if (!accountService.isAdmin(reqAccount)) {
            System.out.println(reqAccount);
            return false;
        }

        // Add Dog
        dogService.addDogRecord(dog);
        return true;
    }

    @GetMapping("/api/dog/dogs")
    public List<Dog> getAllDogs() {
        return dogService.getAllDogRecords();
    }

    @GetMapping("/api/dog/show-dog/{dogId}")
    public Dog getDog(@PathVariable long dogId) {
        return dogService.getDogRecord(dogId);
    }

    @PutMapping("/api/dog/update-dog")
    public boolean updateDog(
            @RequestHeader(name = "email", required = false) String email,
            @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
            @RequestBody Dog dog) {

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        // Check if Admin
        if (!accountService.isAdmin(reqAccount)) {
            System.out.println(reqAccount);
            return false;
        }

        // Add Dog
        dogService.updateDogRecord(dog);
        return true;
    }

    @DeleteMapping("/api/dog/delete-dog/{dogId}")
    public boolean deleteDog(
            @RequestHeader(name = "email", required = false) String email,
            @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
            @PathVariable long dogId) {

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        // Check if Admin
        if (!accountService.isAdmin(reqAccount)) {
            System.out.println(reqAccount);
            return false;
        }

        // Delete Dog
        dogService.deleteDogRecord(dogId);
        return true;
    }
}
