import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { CardModule } from "./components/card/card.module";
import { PhotoModule } from "./users/photo/photo.module";

@NgModule({
  declarations: [HomeComponent, UsersComponent],
  imports: [CommonModule, NgbModule, CardModule, PhotoModule],
  exports: [HomeComponent, UsersComponent]
})
export class SharedModule {}
