import { CommonModule } from '@angular/common';
import { DialogModule } from "./../../shared/dialog/dialog.module";
import { TableModule } from "./../../shared/table/table.module";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage.component";
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: "", component: HomepageComponent }];

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    // use component-modules: table dialog button-section
    TableModule,
    DialogModule,
  ],
  exports:[HomepageComponent]
})
export class HomepageModule {}
