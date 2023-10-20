package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Dog;
import com.rijai.LocationApi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogService implements IDogService {
    @Autowired
    private DogRepository repository;

    @Override
    public Dog addDogRecord(Dog newDog) {
        return repository.save(newDog);
    }

    @Override
    public List<Dog> getAllDogRecords() {
        return (List<Dog>) repository.findAll();
    }

    @Override
    public Dog getDogRecord(long dogId) {
        Optional<Dog> opt_dog = repository.findById(dogId);
        return opt_dog.orElse(null);
    }

    @Override
    public Dog updateDogRecord(Dog updatedDog) {
        Optional<Dog> opt_dog = repository.findById(updatedDog.getId());
        if (opt_dog.isEmpty())
            return null;

        return repository.save(updatedDog);
    }

    @Override
    public Dog deleteDogRecord(long dogId) {
        Optional<Dog> opt_dog = repository.findById(dogId);
        if (opt_dog.isEmpty())
            return null;

        repository.delete(opt_dog.get());
        return opt_dog.get();
    }
}
