package com.rijai.LocationApi.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="dog_adopt_requests")
public class DogAdopt {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "dog_ref_id", unique = true)
    private Dog dogInfo;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "user_ref_id", unique = true)
    private Account requestUserInfo;

    private LocalDate dateRequested;
    private LocalDate dateAccepted;

    private boolean isRequestAccepted;

    public DogAdopt() {
    }

    public DogAdopt(long id, Dog dogInfo, Account requestUserInfo, LocalDate dateRequested, LocalDate dateAccepted, boolean isRequestAccepted) {
        this.id = id;
        this.dogInfo = dogInfo;
        this.requestUserInfo = requestUserInfo;
        this.dateRequested = dateRequested;
        this.dateAccepted = dateAccepted;
        this.isRequestAccepted = isRequestAccepted;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Dog getDogInfo() {
        return dogInfo;
    }

    public void setDogInfo(Dog dogInfo) {
        this.dogInfo = dogInfo;
    }

    public Account getRequestUserInfo() {
        return requestUserInfo;
    }

    public void setRequestUserInfo(Account requestUserInfo) {
        this.requestUserInfo = requestUserInfo;
    }

    public LocalDate getDateRequested() {
        return dateRequested;
    }

    public void setDateRequested(LocalDate dateRequested) {
        this.dateRequested = dateRequested;
    }

    public LocalDate getDateAccepted() {
        return dateAccepted;
    }

    public void setDateAccepted(LocalDate dateAccepted) {
        this.dateAccepted = dateAccepted;
    }

    public boolean isAccepted() {
        return isRequestAccepted;
    }

    public void setRequestAccepted(boolean requestAccepted) {
        isRequestAccepted = requestAccepted;
    }

}
