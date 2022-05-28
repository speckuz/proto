import { DialogModule } from "./shared/dialog/dialog.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomepageModule } from "./pages/homepage/homepage.module";
import { QueryUserModule } from "./pages/query-user/query-user.module";
import { QueryUserComponent } from "./pages/query-user/query-user.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "homepage",
    pathMatch: "full",
  },
  {
    path: "query-user",
    loadChildren: () =>
      import("./pages/query-user/query-user.module").then(
        (m) => m.QueryUserModule
      ),
    component: QueryUserComponent,
  },
  {
    path: "homepage",
    loadChildren: () =>
      import("./pages/homepage/homepage.module").then((m) => m.HomepageModule),
    component: HomepageComponent,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // use component-modules
    HomepageModule,
    QueryUserModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
