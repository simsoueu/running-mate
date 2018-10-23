import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms";
import { DailyRunsModule } from "./daily-runs/daily-runs.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    DailyRunsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
