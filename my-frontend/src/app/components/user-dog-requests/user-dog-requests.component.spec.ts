import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDogRequestsComponent } from './user-dog-requests.component';

describe('UserDogRequestsComponent', () => {
  let component: UserDogRequestsComponent;
  let fixture: ComponentFixture<UserDogRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDogRequestsComponent]
    });
    fixture = TestBed.createComponent(UserDogRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
