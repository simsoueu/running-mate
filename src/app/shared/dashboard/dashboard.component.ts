import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

import { UserService } from "src/app/core/data/user.service";
import { AchievementService } from "src/app/core/data/achievement.service";
import { ActivityService } from "src/app/core/data/activity.service";
import { Activity } from "src/app/core/data/activity";
import { Achievement } from "src/app/core/data/achievement";
import { User } from "src/app/core/data/user";

@Component({
  selector: "app-dashboard",
  providers: [AchievementService, ActivityService, UserService],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  public model: any;
  private users: User[];
  private activities: Activity[];
  private achievement: Achievement[];

  constructor(
    private achievementService: AchievementService,
    private activityService: ActivityService,
    private userService: UserService
  ) {
    this.users = userService.getAll();
    this.activities = activityService.getAll();
    this.achievement = achievementService.getAll();
  }

  ngOnInit() {}
}
