import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailsComponent } from './view-dog-details.component';

describe('DogDetailsComponent', () => {
  let component: DogDetailsComponent;
  let fixture: ComponentFixture<DogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogDetailsComponent]
    });
    fixture = TestBed.createComponent(DogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
