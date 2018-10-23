import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.sass"]
})
export class UserComponent implements OnInit, OnDestroy {
  private sub: any;
  private username: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params["username"];
    });

    console.log(this.username);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
