package com.rijai.LocationApi.model;

import javax.persistence.*;

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

    private boolean isAccepted;

    public DogAdopt() {
    }

    public DogAdopt(long id, Dog dogInfo, Account requestUserInfo, boolean isAccepted) {
        this.id = id;
        this.dogInfo = dogInfo;
        this.requestUserInfo = requestUserInfo;
        this.isAccepted = isAccepted;
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

    public boolean isAccepted() {
        return isAccepted;
    }

    public void setAccepted(boolean accepted) {
        isAccepted = accepted;
    }
}
