package com.rijai.LocationApi.repository;

import com.rijai.LocationApi.model.DogAdopt;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DogAdoptRepository extends CrudRepository<DogAdopt, Long> {
    @Query(
            value = "SELECT * FROM dog_adopt_requests WHERE user_ref_id=?1",
            nativeQuery = true
    )
    List<DogAdopt> getDogAdoptReqByUserId(long userId);

    @Query(
            value = "SELECT * FROM dog_adopt_requests WHERE is_request_accepted = false",
            nativeQuery = true
    )
    List<DogAdopt> getAllDogAdoptReq();
}
