import { CommonModule } from '@angular/common';
import { TableComponent } from "./table.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule  ],
  exports: [TableComponent],
})
export class TableModule {}
