package com.rijai.LocationApi.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Objects;

@Entity
@Table(name="dogs")
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String breed;
    private int age;
    private String sex;
    private String colorCoat;
    private String description;
    private LocalDate arrivedDate;
    private String arrivedFrom;
    private String size;
    private String location;
    @Lob
    private byte[] photoBytes;

    // For Dog Adoption
    private boolean isAdoptRequested;
    private boolean isAdoptAccepted;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", unique = true)
    private Account account;

    public Dog() {
    }

    public Dog(long id, String name, String breed, int age, String sex, String colorCoat, String description, LocalDate arrivedDate, String arrivedFrom, String size, String location, byte[] photoBytes, boolean isAdoptRequested, boolean isAdoptAccepted, Account account) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.sex = sex;
        this.colorCoat = colorCoat;
        this.description = description;
        this.arrivedDate = arrivedDate;
        this.arrivedFrom = arrivedFrom;
        this.size = size;
        this.location = location;
        this.photoBytes = photoBytes;
        this.isAdoptRequested = isAdoptRequested;
        this.isAdoptAccepted = isAdoptAccepted;
        this.account = account;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getColorCoat() {
        return colorCoat;
    }

    public void setColorCoat(String colorCoat) {
        this.colorCoat = colorCoat;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getArrivedDate() {
        return arrivedDate;
    }

    public void setArrivedDate(LocalDate arrivedDate) {
        this.arrivedDate = arrivedDate;
    }

    public String getArrivedFrom() {
        return arrivedFrom;
    }

    public void setArrivedFrom(String arrivedFrom) {
        this.arrivedFrom = arrivedFrom;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public byte[] getPhotoBytes() {
        return photoBytes;
    }

    public void setPhotoBytes(byte[] photoBytes) {
        this.photoBytes = photoBytes;
    }

    public boolean isAdoptRequested() {
        return isAdoptRequested;
    }

    public void setAdoptRequested(boolean adoptRequested) {
        isAdoptRequested = adoptRequested;
    }

    public boolean isAdoptAccepted() {
        return isAdoptAccepted;
    }

    public void setAdoptAccepted(boolean adoptAccepted) {
        isAdoptAccepted = adoptAccepted;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dog)) return false;
        Dog dog = (Dog) o;
        return id == dog.id && age == dog.age && isAdoptRequested == dog.isAdoptRequested && isAdoptAccepted == dog.isAdoptAccepted && Objects.equals(name, dog.name) && Objects.equals(breed, dog.breed) && Objects.equals(sex, dog.sex) && Objects.equals(colorCoat, dog.colorCoat) && Objects.equals(description, dog.description) && Objects.equals(arrivedDate, dog.arrivedDate) && Objects.equals(arrivedFrom, dog.arrivedFrom) && Objects.equals(size, dog.size) && Objects.equals(location, dog.location) && Arrays.equals(photoBytes, dog.photoBytes) && Objects.equals(account, dog.account);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, name, breed, age, sex, colorCoat, description, arrivedDate, arrivedFrom, size, location, isAdoptRequested, isAdoptAccepted, account);
        result = 31 * result + Arrays.hashCode(photoBytes);
        return result;
    }

    @Override
    public String toString() {
        return "Dog{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", age=" + age +
                ", sex='" + sex + '\'' +
                ", colorCoat='" + colorCoat + '\'' +
                ", description='" + description + '\'' +
                ", arrivedDate=" + arrivedDate +
                ", arrivedFrom='" + arrivedFrom + '\'' +
                ", size='" + size + '\'' +
                ", location='" + location + '\'' +
                ", photoBytes=" + Arrays.toString(photoBytes) +
                ", isAdoptRequested=" + isAdoptRequested +
                ", isAdoptAccepted=" + isAdoptAccepted +
                ", account=" + account +
                '}';
    }
}
