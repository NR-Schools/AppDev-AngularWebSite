import { Component, OnInit } from '@angular/core';
import { DogAdopt } from 'src/app/models/dog-adopt';
import { AdoptionService } from 'src/app/services/adoption.service';

@Component({
	selector: 'app-dog-requests',
	templateUrl: './dog-requests.component.html',
	styleUrls: ['./dog-requests.component.css']
})
export class DogRequestsComponent implements OnInit {
	dogAdaptRequests?: Array<DogAdopt>;

	constructor(private adoptionService: AdoptionService) {}

	ngOnInit(): void {
		this.adoptionService.adminViewAllAdoptRequests().subscribe({
			next: (dogAdoptReqs: Array<DogAdopt>) => {
				this.dogAdaptRequests = dogAdoptReqs;
			}
		});
	}
}
