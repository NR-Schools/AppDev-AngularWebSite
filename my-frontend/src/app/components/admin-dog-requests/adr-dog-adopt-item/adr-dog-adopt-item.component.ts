import { Component, Input } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';

@Component({
	selector: 'adr-dog-adopt-item',
	templateUrl: './adr-dog-adopt-item.component.html',
	styleUrls: ['./adr-dog-adopt-item.component.css']
})
export class AdrDogAdoptItemComponent {
	@Input({required: true}) dogItem!: Dog;

	constructor(private dogRecordService: DogRecordService) {}

	onDogAdoptStatus(status: boolean) {
		this.dogItem.adoptAccepted = status;

		console.log(this.dogItem);

		this.dogRecordService.adminConfirmDogAdopt(this.dogItem).subscribe({
			next: (value: boolean) => {
				console.log(value);
			},
			error: (err: any) => {
				console.log(err);
			}
		});
	}
}
