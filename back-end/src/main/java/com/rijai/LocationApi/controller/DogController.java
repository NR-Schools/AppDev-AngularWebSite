package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Dog;
import com.rijai.LocationApi.model.Request;
import com.rijai.LocationApi.model.Response;
import com.rijai.LocationApi.service.IAccountService;
import com.rijai.LocationApi.service.IDogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class DogController {
    @Autowired
    private IAccountService accountService;
    @Autowired
    private IDogService dogService;

    @RequestMapping(value = "/api/dog/add-dog", method = RequestMethod.POST)
    public Response addNewDog(@RequestBody Request request)
    {
        Response response = new Response();

        // Check if Admin
        if (!accountService.isAdmin(request.auth))
        {
            //response.status = "failed";
            //response.result = null;
            //return response;
        }

        // Add Dog
        Dog newDog = dogService.addDogRecord(request.dogPayload);
        response.status = "success";
        response.result = newDog;
        return new Response();
    }

    @RequestMapping(value = "/api/dog/dogs", method = RequestMethod.GET)
    public Response getAllDogs()
    {
        Response response = new Response();

        response.status = "success";
        response.result = dogService.getAllDogRecords();
        return response;
    }

    @RequestMapping(value = "/api/dog/show-dog/{dogId}", method = RequestMethod.GET)
    public Response getDog(@PathVariable long dogId)
    {
        Response response = new Response();

        response.status = "success";
        response.result = dogService.getDogRecord(dogId);
        return response;
    }

    @RequestMapping(value = "/api/dog/update-dog", method = RequestMethod.PUT)
    public Response updateDog(@RequestBody Request request)
    {
        Response response = new Response();

        // Check if Admin
        if (!accountService.isAdmin(request.auth))
        {
            //response.status = "failed";
            //response.result = null;
            //return response;
        }

        // Add Dog
        Dog updatedDog = dogService.updateDogRecord(request.dogPayload);
        response.status = "success";
        response.result = updatedDog;
        return new Response();
    }

    @RequestMapping(value = "/api/dog/delete-dog/{dogId}", method = RequestMethod.DELETE)
    public Response deleteDog(@PathVariable long dogId)
    {
        Response response = new Response();

        // Check if Admin

        // Delete Dog
        Dog deletedDog = dogService.deleteDogRecord(dogId);
        response.status = "success";
        response.result = deletedDog;
        return response;
    }
}
