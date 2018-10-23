import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, NgbModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
