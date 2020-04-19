import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CropperDialogComponent } from '../cropper-dialog/cropper-dialog.component';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  showImage: any;
  imageData = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog() {
    const dialogRef = this.dialog.open(CropperDialogComponent, {
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.image !== null && result.image !== undefined) {
        this.showImage = true;
        this.imageData = result.image;
      }
    })
  }

}
