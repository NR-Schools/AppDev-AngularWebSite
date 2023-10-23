import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDogItemComponent } from './ad-dog-item.component';

describe('AdDogItemComponent', () => {
  let component: AdDogItemComponent;
  let fixture: ComponentFixture<AdDogItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdDogItemComponent]
    });
    fixture = TestBed.createComponent(AdDogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
