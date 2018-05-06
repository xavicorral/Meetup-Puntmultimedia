import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallProfessorPage } from './detall-professor';

@NgModule({
  declarations: [
    DetallProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallProfessorPage),
  ],
})
export class DetallProfessorPageModule {}
