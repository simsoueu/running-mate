import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ActivitiesComponent } from "./activities.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ActivitiesComponent],
  exports: [ActivitiesComponent],
  imports: [CommonModule, NgbModule, RouterModule]
})
export class ActivitiesModule {}
