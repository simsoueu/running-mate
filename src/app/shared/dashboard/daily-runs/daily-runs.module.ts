import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DailyRunsComponent } from "./daily-runs.component";

@NgModule({
  declarations: [DailyRunsComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [DailyRunsComponent]
})
export class DailyRunsModule {}
