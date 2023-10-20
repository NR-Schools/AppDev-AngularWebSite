package com.rijai.LocationApi.controller;

import com.rijai.LocationApi.service.IDogService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class DogController {
    private IDogService dogService;
}
