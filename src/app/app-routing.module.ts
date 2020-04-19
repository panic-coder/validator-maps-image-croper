import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateComponent } from './components/validate/validate.component';
import { MapsComponent } from './components/maps/maps.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';

const routes: Routes = [
  { path: '', component: ValidateComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'image-cropper', component: ImageCropperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
