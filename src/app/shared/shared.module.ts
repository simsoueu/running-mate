import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { CardModule } from "./components/card/card.module";
import { PhotoModule } from "./users/photo/photo.module";
import { UserComponent } from "./users/user/user.component";
import { ActivitiesModule } from "./home/activities/activities.module";
import { RouterModule } from "@angular/router";
import { ProfileSummaryModule } from "./users/user/profile-summary/profile-summary.module";
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [HomeComponent, UsersComponent, UserComponent, SharedComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    CardModule,
    PhotoModule,
    ProfileSummaryModule,
    ActivitiesModule
  ],
  exports: [HomeComponent, UsersComponent]
})
export class SharedModule {}
