import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base_service';

@Injectable({
  providedIn: 'root',
})
export class DogRecordService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  addDogRecord(dog: Dog) {
    // Send dog to server
  }

  viewAllDogRecords() {
    // Get all dogs
    // If user, return only dogs that are not yet adopted
    // If admin, return all dogs
    return this.http.get<Dog[]>(this.dogssUrl + '/dogs/');
  }

  viewDogRecord(dog_id: number) {
    // Get specific dog recor
  }

  updateDogRecord(dog_id: number, updated_dog_info: Dog) {
    // Create new dog object, merging id and updated info
    // Send dog to server
  }

  deleteDogRecord(dog_id: number) {
    // Delete dog from server
  }
}
