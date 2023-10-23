import { Component, Input } from '@angular/core';
import { Dog } from 'src/app/models/dog';

@Component({
	selector: 'ad-dog-item',
	templateUrl: './ad-dog-item.component.html',
	styleUrls: ['./ad-dog-item.component.css']
})
export class AdDogItemComponent {
	@Input({ required: true }) dogItem!: Dog;
	thumbnail: any;
}
