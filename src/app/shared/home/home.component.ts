import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/data/user.service";
import { ActivityService } from "src/app/core/data/activity.service";
import { User } from "src/app/core/data/user";
import { Activity } from "src/app/core/data/activity";

class TimelineActivity extends Activity {
  authorPictureUrl: string;
  timeSincePost: number;
}

@Component({
  selector: "app-home",
  providers: [UserService, ActivityService],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  public users: User[];
  public activities: Activity[];
  public sumDistanceRun: number;

  constructor(
    private userService: UserService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    let num = 0;
    this.users = this.userService.getAll();
    this.activities = this.activityService.getAll();

    this.sumDistanceRun = this.activities.reduce(function(acc, cur) {
      return acc + cur.distance;
    }, 0);

    this.activities = this.activities
      .sort((a, b) => +a.datePost - +b.datePost)
      .reverse();

    this.activities.forEach(act => {
      for (let i = 0; i < this.users.length; i++) {
        if (act.authorUsername === this.users[i].username) {
          act.authorPictureUrl = this.users[i].photo.url;
          act.timeSincePost = +(
            Math.abs(act.datePost.getTime() - new Date().getTime()) / 3600000
          ).toFixed();

          if (act.timeSincePost < 24) {
            act.timeSincePostStr = +act.timeSincePost + " hours";
          } else {
            num = +(act.timeSincePost / 24).toFixed();
            act.timeSincePostStr = num + " days";
          }
          break;
        }
      }
    });

    console.log(this.activities);
  }
}
