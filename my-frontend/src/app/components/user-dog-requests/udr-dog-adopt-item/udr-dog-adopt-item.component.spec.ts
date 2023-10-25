import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdrDogAdoptItemComponent } from './udr-dog-adopt-item.component';

describe('UdrDogAdoptItemComponent', () => {
  let component: UdrDogAdoptItemComponent;
  let fixture: ComponentFixture<UdrDogAdoptItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdrDogAdoptItemComponent]
    });
    fixture = TestBed.createComponent(UdrDogAdoptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
