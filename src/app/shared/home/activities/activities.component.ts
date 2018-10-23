import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from "@angular/core";
import { Activity } from "src/app/core/data/activity";

//   providers: [UserService],
@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.sass"]
})
export class ActivitiesComponent implements OnInit {
  @Input()
  activities: Activity[] = [];

  constructor() {}

  ngOnInit() {}

  goToUser(username: string) {
    // console.log("aqui");
    // this.router.navigate(["/user", username]);
  }
}
