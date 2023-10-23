package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Account;
import com.rijai.LocationApi.model.DogAdopt;

import java.util.List;

public interface IDogAdoptService {
    DogAdopt userAdoptDog(DogAdopt dogAdopt);
    List<DogAdopt> userViewAllDogAdopt(Account userAccount);
    DogAdopt adminConfirmDogAdapt(DogAdopt dogAdopt);
    List<DogAdopt> adminViewAllConfirmDogAdopt();
}
