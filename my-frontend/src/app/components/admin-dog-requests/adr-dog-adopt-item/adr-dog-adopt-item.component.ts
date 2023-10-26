import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';
import { ImageUtils } from 'src/app/utils/image-utils';

@Component({
	selector: 'adr-dog-adopt-item',
	templateUrl: './adr-dog-adopt-item.component.html',
	styleUrls: ['./adr-dog-adopt-item.component.css']
})
export class AdrDogAdoptItemComponent implements OnInit {
	@Input({ required: true }) dogItem!: Dog;
	@Output() itemReloadEvent =  new EventEmitter<void>();
	thumbnail: any;

	constructor(private dogRecordService: DogRecordService) { }

	ngOnInit(): void {
		this.thumbnail = ImageUtils.base64ToImage(this.dogItem.photoBytes);

	}

	onDogAdoptStatus(status: boolean): void {
		this.dogItem.adoptAccepted = status;

		this.dogRecordService.adminConfirmDogAdopt(this.dogItem).subscribe({
			next: (value: boolean) => {
				if (value) {
					this.itemReloadEvent.emit();
				}
			},
			error: (err: any) => {
				console.error(err);
			}
		});
	}
}
