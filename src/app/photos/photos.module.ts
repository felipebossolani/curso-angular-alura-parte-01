import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    imports: [         
        PhotoListModule,
        PhotoFormModule,
        PhotoModule
    ] 
})

export class PhotosModule{

}