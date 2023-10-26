import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dog } from 'src/app/models/dog';
import { DogRecordService } from 'src/app/services/dog-record.service';
import { ImageUtils } from 'src/app/utils/image-utils';
import { Router } from '@angular/router';
@Component({
  selector: 'udr-dog-adopt-item',
  templateUrl: './udr-dog-adopt-item.component.html',
  styleUrls: ['./udr-dog-adopt-item.component.css'],
})
export class UdrDogAdoptItemComponent implements OnInit {
  @Input({ required: true }) dogItem!: Dog;
  @Output() itemReloadEvent =  new EventEmitter<void>();
  thumbnail: any;

  constructor(
    private router: Router,
    private dogRecordService: DogRecordService
  ) {}

  ngOnInit(): void {
    this.thumbnail = ImageUtils.base64ToImage(this.dogItem.photoBytes);
  }

  onUserCancelDogAdoptRequest() {
    console.log(this.dogItem);

    this.dogRecordService.userCancelDogAdopt(this.dogItem).subscribe({
      next: (value: boolean) => {
        this.router.navigate(['/user-dog-requests']);
        this.itemReloadEvent.emit();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
