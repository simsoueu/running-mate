import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { ProfileSummaryModule } from "./users/user/profile-summary/profile-summary.module";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { CardModule } from "./components/card/card.module";
import { PhotoModule } from "./users/photo/photo.module";
import { ActivitiesModule } from "./home/activities/activities.module";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  declarations: [HomeComponent, UsersComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    CardModule,
    PhotoModule,
    ProfileSummaryModule,
    ActivitiesModule,
    DashboardModule
  ],
  exports: [HomeComponent, UsersComponent]
})
export class SharedModule {}
