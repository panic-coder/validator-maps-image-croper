import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper-dialog',
  templateUrl: './cropper-dialog.component.html',
  styleUrls: ['./cropper-dialog.component.css']
})
export class CropperDialogComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageEvent: any;

  ngOnInit() {
  }

  constructor(public dialogRef: MatDialogRef<CropperDialogComponent>) { }

  onNoClick(): void {
    console.log('Dialog');
    this.dialogRef.close();
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImageEvent = event;
      this.croppedImage = event.base64;
      
  }
  imageLoaded() {
      console.log("cropper");
  }
  loadImageFailed() {
      console.log("Failed");
      
  }

}
