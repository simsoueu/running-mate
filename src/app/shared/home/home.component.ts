import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/data/user.service";
import { ActivityService, Activity } from "src/app/core/data/activity.service";
import { User } from "src/app/core/data/user";
import { currentId } from "async_hooks";

@Component({
  selector: "app-home",
  providers: [UserService, ActivityService],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  private users: User[];
  private activities: Activity[];
  private sumDistanceRun: number;

  constructor(
    private userService: UserService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.users = this.userService.getAll();
    this.activities = this.activityService.getAll();

    this.sumDistanceRun = this.activities.reduce(function(acc, cur) {
      return acc + cur.distance;
    }, 0);
  }
}
