package com.rijai.LocationApi.repository;

import com.rijai.LocationApi.model.DogAdopt;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DogAdoptRepository extends CrudRepository<DogAdopt, Long> {
}
