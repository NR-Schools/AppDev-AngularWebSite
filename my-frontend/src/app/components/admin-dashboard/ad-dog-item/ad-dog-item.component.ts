import { Component, Input, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';
import { ImageUtils } from 'src/app/utils/image-utils';

@Component({
	selector: 'ad-dog-item',
	templateUrl: './ad-dog-item.component.html',
	styleUrls: ['./ad-dog-item.component.css']
})
export class AdDogItemComponent implements OnInit {
	@Input({ required: true }) dogItem!: Dog;
	thumbnail: any;

	constructor(private dogRecordService: DogRecordService) {}

	ngOnInit(): void {
		// Show Image
		this.thumbnail = ImageUtils.base64ToImage(this.dogItem.photoBytes);
	}

	onItemRemove(): void {
		console.log(this.dogItem.id!);
		this.dogRecordService.deleteDogRecord(this.dogItem.id!).subscribe({
			next: (value: boolean) => {},
			error: (err: any) => { console.log(err); }
		});
	}
}
