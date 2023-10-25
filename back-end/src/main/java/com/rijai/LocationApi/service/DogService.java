package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Account;
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
        newDog.setAdoptRequested(false);
        newDog.setAdoptAccepted(false);
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

    @Override
    public List<Dog> userViewAllReq(long id) {
        return repository.getAllDogsAssocWithUser(id);
    }

    @Override
    public Dog userAdoptDog(Dog dog, Account account) {
        dog.setAccount(account);
        dog.setAdoptRequested(true);
        dog.setAdoptAccepted(false);
        return repository.save(dog);
    }

    @Override
    public List<Dog> adminViewAllDogAdoptReq() {
        return repository.getAllRequestedDogs();
    }

    @Override
    public boolean adminConfirmReqDogAdopt(Dog dog) {
        // Check if Accepted Or Not
        if (dog.isAdoptAccepted()) {
            // Remove This Dog
            repository.delete(dog);
        }
        else {
            // Remove Adoption Info
            dog.setAccount(null);
            dog.setAdoptRequested(false);
            dog.setAdoptAccepted(false);
            repository.save(dog);
        }

        return true;
    }
}
