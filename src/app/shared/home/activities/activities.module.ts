import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ActivitiesComponent } from "./activities.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ActivitiesComponent],
  exports: [ActivitiesComponent],
  imports: [CommonModule, NgbModule]
})
export class ActivitiesModule {}
