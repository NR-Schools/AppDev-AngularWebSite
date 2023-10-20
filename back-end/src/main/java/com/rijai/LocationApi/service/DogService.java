package com.rijai.LocationApi.service;

import com.rijai.LocationApi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogService {
    @Autowired
    private DogRepository repository;
}
