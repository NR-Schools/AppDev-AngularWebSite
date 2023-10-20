package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Response;
import com.rijai.LocationApi.service.IDogService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class DogController {
    private IDogService dogService;

    @RequestMapping(value = "/api/dog/add-dog", method = RequestMethod.POST)
    public Response addNewDog()
    {
        // Check if Admin
        return new Response();
    }

    @RequestMapping(value = "/api/dog/dogs", method = RequestMethod.GET)
    public Response getAllDogs()
    {
        return new Response();
    }

    @RequestMapping(value = "/api/dog/show-dog/{id}", method = RequestMethod.GET)
    public Response getDog()
    {
        return new Response();
    }

    @RequestMapping(value = "/api/dog/update-dog", method = RequestMethod.PUT)
    public Response updateDog()
    {
        // Check if Admin
        return new Response();
    }

    @RequestMapping(value = "/api/dog/delete-dog", method = RequestMethod.DELETE)
    public Response deleteDog()
    {
        // Check if Admin
        return new Response();
    }
}
