import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDogAdoptItemComponent } from './dr-dog-adopt-item.component';

describe('DrDogAdoptItemComponent', () => {
  let component: DrDogAdoptItemComponent;
  let fixture: ComponentFixture<DrDogAdoptItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrDogAdoptItemComponent]
    });
    fixture = TestBed.createComponent(DrDogAdoptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
