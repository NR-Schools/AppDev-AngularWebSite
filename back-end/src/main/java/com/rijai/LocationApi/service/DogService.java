package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Dog;
import com.rijai.LocationApi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogService implements IDogService {
    @Autowired
    private DogRepository repository;

    @Override
    public Dog addDogRecord(Dog newDog) {
        return null;
    }

    @Override
    public List<Dog> getAllDogRecords() {
        return null;
    }

    @Override
    public Dog getDogRecord(long dogId) {
        return null;
    }

    @Override
    public Dog updateDogRecord(long dogId, Dog updatedDog) {
        return null;
    }

    @Override
    public Dog deleteDogRecord(long dogId) {
        return null;
    }
}
