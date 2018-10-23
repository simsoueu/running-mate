import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./shared/home/home.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { UsersComponent } from "./shared/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [HttpModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
