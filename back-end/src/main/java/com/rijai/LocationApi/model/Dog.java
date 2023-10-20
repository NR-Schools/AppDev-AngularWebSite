package com.rijai.LocationApi.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name="dogs")
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String breed;
    private LocalDate dob;
    private String sex;
    private double height;
    private double weight;
    private String colorCoat;
    private String description;
    private LocalDateTime adoptionDate;

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

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
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

    public LocalDateTime getAdoptionDate() {
        return adoptionDate;
    }

    public void setAdoptionDate(LocalDateTime adoptionDate) {
        this.adoptionDate = adoptionDate;
    }

    public Dog() {
    }

    public Dog(long id, String name, String breed, LocalDate dob, String sex, double height, double weight, String colorCoat, String description, LocalDateTime adoptionDate) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.dob = dob;
        this.sex = sex;
        this.height = height;
        this.weight = weight;
        this.colorCoat = colorCoat;
        this.description = description;
        this.adoptionDate = adoptionDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dog)) return false;
        Dog dog = (Dog) o;
        return id == dog.id && Double.compare(height, dog.height) == 0 && Double.compare(weight, dog.weight) == 0 && Objects.equals(name, dog.name) && Objects.equals(breed, dog.breed) && Objects.equals(dob, dog.dob) && Objects.equals(sex, dog.sex) && Objects.equals(colorCoat, dog.colorCoat) && Objects.equals(description, dog.description) && Objects.equals(adoptionDate, dog.adoptionDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, breed, dob, sex, height, weight, colorCoat, description, adoptionDate);
    }

    @Override
    public String toString() {
        return "Dog{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", dob=" + dob +
                ", sex='" + sex + '\'' +
                ", height=" + height +
                ", weight=" + weight +
                ", colorCoat='" + colorCoat + '\'' +
                ", description='" + description + '\'' +
                ", adoptionDate=" + adoptionDate +
                '}';
    }
}
