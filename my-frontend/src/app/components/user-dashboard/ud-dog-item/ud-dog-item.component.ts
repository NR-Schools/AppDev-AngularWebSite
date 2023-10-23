import { Component, Input, OnInit } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { ImageUtils } from 'src/app/utils/image-utils';

@Component({
	selector: 'ud-dog-item',
	templateUrl: './ud-dog-item.component.html',
	styleUrls: ['./ud-dog-item.component.css']
})
export class UdDogItemComponent implements OnInit {
	@Input({ required: true }) dogItem!: Dog;
	thumbnail: any;

	ngOnInit(): void {
		// Convert Bytes to Image
		this.thumbnail = ImageUtils.byteArrayToImageDataUrl(this.dogItem.photoBytes);
	}
}
