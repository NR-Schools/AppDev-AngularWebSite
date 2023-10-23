import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdDogItemComponent } from './ud-dog-item.component';

describe('UdDogItemComponent', () => {
  let component: UdDogItemComponent;
  let fixture: ComponentFixture<UdDogItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdDogItemComponent]
    });
    fixture = TestBed.createComponent(UdDogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
