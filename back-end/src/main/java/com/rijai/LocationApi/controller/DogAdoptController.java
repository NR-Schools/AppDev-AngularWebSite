package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.model.Request;
import com.rijai.LocationApi.model.Response;
import com.rijai.LocationApi.service.IAccountService;
import com.rijai.LocationApi.service.IDogAdoptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class DogAdoptController {

    @Autowired
    private IAccountService accountService;
    @Autowired
    private IDogAdoptService dogAdoptService;

    @PostMapping("api/dog-adopt/user-dog-adapt")
    public Response userAdoptDog(@RequestBody Request request)
    {
        Response response = new Response();

        response.status = "success";
        response.result = dogAdoptService.userAdoptDog(request.dogAdoptPayload);

        return response;
    }

    @PostMapping("api/dog-adopt/user-view-all-dog-adopt")
    public Response userViewAllDogAdopt(@RequestBody Request request)
    {
        Response response = new Response();

        response.status = "success";
        response.result = dogAdoptService.userAdoptDog(request.dogAdoptPayload);

        return response;
    }

    @PostMapping("api/dog-adopt/admin-confirm-dog-adopt")
    public Response adminConfirmDogAdopt(@RequestBody Request request)
    {
        Response response = new Response();

        // Check if Admin
        if (!accountService.isAdmin(request.auth))
        {
            response.status = "failed";
            response.result = null;
            return response;
        }

        response.status = "success";
        response.result = dogAdoptService.adminConfirmDogAdapt(request.dogAdoptPayload);

        return response;
    }

    @PostMapping("api/dog-adopt/admin-view-all-confirm-dog-adopt")
    public Response adminViewAllConfirmDogAdopt(@RequestBody Request request)
    {
        Response response = new Response();

        // Check if Admin
        if (!accountService.isAdmin(request.auth))
        {
            response.status = "failed";
            response.result = null;
            return response;
        }

        response.status = "success";
        response.result = dogAdoptService.adminViewAllConfirmDogAdopt();

        return response;
    }
}
