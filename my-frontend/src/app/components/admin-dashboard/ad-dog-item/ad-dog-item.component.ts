import { Component, Input } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';

@Component({
	selector: 'ad-dog-item',
	templateUrl: './ad-dog-item.component.html',
	styleUrls: ['./ad-dog-item.component.css']
})
export class AdDogItemComponent {
	@Input({ required: true }) dogItem!: Dog;
	thumbnail: any;

	constructor(private dogRecordService: DogRecordService) {}

	onItemRemove(): void {
		this.dogRecordService.deleteDogRecord(this.dogItem.id!);
	}
}
