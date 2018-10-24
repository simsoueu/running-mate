import { Component, OnInit, Input } from "@angular/core";
import { Activity } from "src/app/core/data/activity";
import { AchievementService } from "src/app/core/data/achievement.service";
import { User } from "src/app/core/data/user";
import { Achievement } from "src/app/core/data/achievement";

export class Summary {
  totalActivities: number;
  sumDistance: number;
  averageRun: number;
  lastRunDistance: number;
}

//   providers: [UserService],
@Component({
  selector: "app-profile-summary",
  providers: [AchievementService],
  templateUrl: "./profile-summary.component.html",
  styleUrls: ["./profile-summary.component.sass"]
})
export class ProfileSummaryComponent implements OnInit {
  @Input()
  activities: Activity[] = [];

  @Input()
  user: User;

  public summary: Summary;
  public achievements: Achievement[];

  constructor(private achievementsService: AchievementService) {}

  ngOnInit() {
    this.summary = new Summary();
    this.summary.totalActivities = this.activities.length;
    this.summary.sumDistance = this.activities.reduce(function(acc, cur) {
      return acc + cur.distance;
    }, 0);
    this.summary.averageRun = +(
      this.summary.sumDistance / this.summary.totalActivities
    ).toFixed();

    if (isNaN(this.summary.averageRun)) {
      this.summary.averageRun = 0;
    }

    if (this.activities.length > 0) {
      this.summary.lastRunDistance = this.activities[0].distance;
    }
    this.achievements = this.achievementsService.getActivitiesByUsername(
      this.user.username
    );

    this.summary.lastRunDistance = 0;
  }

  goToUser(username: string) {
    // console.log("aqui");
    // this.router.navigate(["/user", username]);
  }
}
