import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDogRecordComponent } from './add-dog-record.component';

describe('AddDogRecordComponent', () => {
  let component: AddDogRecordComponent;
  let fixture: ComponentFixture<AddDogRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDogRecordComponent]
    });
    fixture = TestBed.createComponent(AddDogRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
