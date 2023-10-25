import { Component, Input } from '@angular/core';
import { Dog } from 'src/app/models/dog';

@Component({
	selector: 'dr-dog-adopt-item',
	templateUrl: './dr-dog-adopt-item.component.html',
	styleUrls: ['./dr-dog-adopt-item.component.css']
})
export class DrDogAdoptItemComponent {
	@Input({required: true}) dogItem!: Dog;

	onDogAdoptStatus(status: boolean) {
	}
}
