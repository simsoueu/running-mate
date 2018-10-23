import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { CardModule } from "./components/card/card.module";
import { PhotoModule } from "./users/photo/photo.module";
import { UserComponent } from "./users/user/user.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent, UsersComponent, UserComponent],
  imports: [CommonModule, RouterModule, NgbModule, CardModule, PhotoModule],
  exports: [HomeComponent, UsersComponent]
})
export class SharedModule {}
