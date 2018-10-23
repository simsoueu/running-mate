import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/core/data/user.service";
import { ActivityService } from "src/app/core/data/activity.service";
import { Activity } from "src/app/core/data/activity";
import { User } from "src/app/core/data/user";

@Component({
  selector: "app-user",
  providers: [UserService, ActivityService],
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.sass"]
})
export class UserComponent implements OnInit, OnDestroy {
  private sub: any;
  private username: any;
  private currentUser: User;
  private activities: Activity[];
  private lastActivity: Activity;
  private lastActivityStr: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params["username"];
    });

    this.currentUser = this.userService.getUserByUsername(this.username);
    this.activities = this.activityService.getActivitiesByUsername(
      this.username
    );

    if (this.activities.length > 0) {
      this.lastActivity = this.activities[0];

      this.activities.forEach(act => {
        if (act.dateActivity < this.lastActivity.dateActivity) {
          this.lastActivity = act;
        }
      });

      this.lastActivityStr = this.lastActivity.dateActivity.toDateString();
    } else {
      this.lastActivityStr = "This user hasen't performed any activity yet!";
    }
    // console.log(this.lastActivity.dateActivity.toDateString());
    console.log(this.currentUser.city);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
