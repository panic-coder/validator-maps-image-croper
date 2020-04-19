import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonToggleModule,
  MatFormFieldModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValidateComponent } from './components/validate/validate.component';
import { MapsComponent } from './components/maps/maps.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CropperDialogComponent } from './components/cropper-dialog/cropper-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AgmCoreModule } from '@agm/core'; 


@NgModule({
  declarations: [
    AppComponent,
    ValidateComponent,
    MapsComponent,
    ImageCropperComponent,
    CropperDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA7iWHJPFXLumaRw_lMH3SzZntB_T-knU'
    })
  ],
   entryComponents: [
    CropperDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
