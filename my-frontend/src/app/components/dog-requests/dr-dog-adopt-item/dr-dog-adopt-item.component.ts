import { Component, Input } from '@angular/core';
import { DogAdopt } from 'src/app/models/dog-adopt';

@Component({
	selector: 'dr-dog-adopt-item',
	templateUrl: './dr-dog-adopt-item.component.html',
	styleUrls: ['./dr-dog-adopt-item.component.css']
})
export class DrDogAdoptItemComponent {
	@Input({required: true}) dogAdoptItem!: DogAdopt;

	onDogAdoptStatus(status: boolean) {
	}
}
