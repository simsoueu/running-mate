import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { ProfileSummaryComponent } from "./profile-summary.component";

@NgModule({
  declarations: [ProfileSummaryComponent],
  exports: [ProfileSummaryComponent],
  imports: [CommonModule, NgbModule]
})
export class ProfileSummaryModule {}
