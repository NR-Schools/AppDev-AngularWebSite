package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Account;
import com.rijai.LocationApi.model.Dog;
import com.rijai.LocationApi.service.IAccountService;
import com.rijai.LocationApi.service.IDogService;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public Dog updateDog(
            @RequestHeader(name = "email", required = false) String email,
            @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
            @RequestParam("id") long id,
            @RequestParam("photoBytes") MultipartFile file,
            @RequestParam("name") String name,
            @RequestParam("breed") String breed,
            @RequestParam("age") int age,
            @RequestParam("sex") String sex,
            @RequestParam("colorCoat") String colorCoat,
            @RequestParam(value = "desciption", required = false) String desciption,
            @RequestParam("arrivedDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate arrivedDate,
            @RequestParam("arrivedFrom") String arrivedFrom,
            @RequestParam("size") String size,
            @RequestParam("location") String location) throws IOException {
        
        // Create Dog
        Dog dog = new Dog();
        dog.setId(id);
        dog.setPhotoBytes(file.getBytes());
        dog.setName(name);
        dog.setBreed(breed);
        dog.setAge(age);
        dog.setSex(sex);
        dog.setColorCoat(colorCoat);
        dog.setDescription(desciption);
        dog.setArrivedDate(arrivedDate);
        dog.setArrivedFrom(arrivedFrom);
        dog.setSize(size);
        dog.setLocation(location);

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        // Check if Admin
        if (!accountService.isAdmin(reqAccount)) {
            return null;
        }

        // Add Dog
        return dogService.updateDogRecord(dog);
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
            return false;
        }

        // Delete Dog
        dogService.deleteDogRecord(dogId);
        return true;
    }

    // For Adoption
    @PostMapping("/api/dog-adopt/user-dog-adopt")
    public Dog userDogAdopt(
            @RequestHeader(name = "email", required = false) String email,
            @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
            @RequestBody Dog dog) {

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        Dog reqAdoptedDog = dogService.userAdoptDog(dog, accountService.getAccount(email));
        reqAdoptedDog.getAccount().setId(-1);
        reqAdoptedDog.getAccount().setPassword("");
        return reqAdoptedDog;
    }

    @GetMapping("/api/dog-adopt/admin-view-all-adopt-req")
    public List<Dog> adminViewAllDogAdoptReq(
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

        return dogService.adminViewAllDogAdoptReq();
    }

    @PostMapping("/api/dog-adopt/admin-confirm-req")
    public boolean adminConfirmReq(@RequestHeader(name = "email", required = false) String email,
            @RequestHeader(name = "session-auth-string", required = false) String sessionAuthString,
            @RequestBody Dog dog) {

        // Construct Account
        Account reqAccount = new Account();
        reqAccount.setEmail(email);
        reqAccount.setSessionAuthString(sessionAuthString);

        // Check if Admin
        if (!accountService.isAdmin(reqAccount)) {
            return false;
        }

        return dogService.adminConfirmReqDogAdopt(dog);
    }
}
