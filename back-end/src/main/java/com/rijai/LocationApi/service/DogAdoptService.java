package com.rijai.LocationApi.service;

import com.rijai.LocationApi.model.Account;
import com.rijai.LocationApi.model.Dog;
import com.rijai.LocationApi.model.DogAdopt;
import com.rijai.LocationApi.repository.AccountRepository;
import com.rijai.LocationApi.repository.DogAdoptRepository;
import com.rijai.LocationApi.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogAdoptService implements IDogAdoptService {
    @Autowired
    private  AccountRepository accountRepository;
    @Autowired
    private DogAdoptRepository dogAdoptRepository;

    @Override
    public DogAdopt userAdoptDog(DogAdopt dogAdopt) {
        return dogAdoptRepository.save(dogAdopt);
    }

    @Override
    public List<DogAdopt> userViewAllDogAdopt(Account userAccount) {
        Account opt_acc = accountRepository.findByEmail(userAccount.getEmail());
        if (opt_acc == null)
            return List.of();

        return dogAdoptRepository.getDogAdoptReqByUserId(opt_acc.getId());
    }

    @Override
    public DogAdopt adminConfirmDogAdapt(DogAdopt dogAdopt) {
        Optional<DogAdopt> opt_dog_adopt = dogAdoptRepository.findById(dogAdopt.getId());
        if (opt_dog_adopt.isEmpty())
            return null;

        DogAdopt updatedDogAdopt = opt_dog_adopt.get();
        updatedDogAdopt.setRequestAccepted(true);
        return dogAdoptRepository.save(updatedDogAdopt);
    }

    @Override
    public List<DogAdopt> adminViewAllConfirmDogAdopt() {
        return dogAdoptRepository.getAllDogAdoptReq();
    }
}
