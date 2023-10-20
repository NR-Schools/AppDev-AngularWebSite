package com.rijai.LocationApi.service;

import com.rijai.LocationApi.repository.AccountRepository;
import com.rijai.LocationApi.repository.DogAdoptRepository;
import com.rijai.LocationApi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogAdoptService {
    @Autowired
    private DogRepository dogRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private DogAdoptRepository dogAdoptRepository;
}
