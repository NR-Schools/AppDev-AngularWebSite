import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDogRecordComponent } from './update-dog-record.component';

describe('UpdateDogRecordComponent', () => {
	let component: UpdateDogRecordComponent;
	let fixture: ComponentFixture<UpdateDogRecordComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [UpdateDogRecordComponent]
		});
		fixture = TestBed.createComponent(UpdateDogRecordComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
