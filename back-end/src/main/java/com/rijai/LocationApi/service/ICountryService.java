package com.rijai.LocationApi.service;

import java.util.List;

public interface ICountryService {
    List<Country> getCountries();
    Country addCountry(Country country);
    Country updateCountry(long id);
    Country getCountry(long id);
}