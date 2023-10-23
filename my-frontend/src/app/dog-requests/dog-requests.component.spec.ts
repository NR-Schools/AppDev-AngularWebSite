import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogRequestsComponent } from './dog-requests.component';

describe('DogRequestsComponent', () => {
  let component: DogRequestsComponent;
  let fixture: ComponentFixture<DogRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogRequestsComponent]
    });
    fixture = TestBed.createComponent(DogRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
