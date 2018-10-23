import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NgbModule],
  exports: [HomeComponent]
})
export class SharedModule {}
