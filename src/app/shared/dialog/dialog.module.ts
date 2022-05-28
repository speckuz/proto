import { CommonModule } from '@angular/common';
import { ButtonSectionModule } from './../button-section/button-section.module';
import { DialogComponent } from "./dialog.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    // use component-modules
    ButtonSectionModule, ],
  exports: [DialogComponent],
})
export class DialogModule {}
