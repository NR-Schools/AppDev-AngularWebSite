package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Dog;

import java.util.List;

public interface IDogService {
    Dog addDogRecord(Dog newDog);
    List<Dog> getAllDogRecords();
    Dog getDogRecord(long dogId);
    Dog updateDogRecord(long dogId, Dog updatedDog);
    Dog deleteDogRecord(long dogId);
}
