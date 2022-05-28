import { ButtonSectionModule } from "./../../shared/button-section/button-section.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { QueryUserComponent } from "./query-user.component";
import { TableModule } from "src/app/shared/table/table.module";

const routes: Routes = [{ path: "", component: QueryUserComponent }];

@NgModule({
  declarations: [QueryUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // use component-modules: table dialog button-section
    TableModule,
    ButtonSectionModule,
  ],
  exports:[QueryUserComponent]
})
export class QueryUserModule {}
