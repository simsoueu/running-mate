import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from "@angular/core";
import { UserService } from "src/app/core/data/user.service";
import { User } from "src/app/core/data/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  providers: [UserService],
  styleUrls: ["./users.component.sass"]
})
export class UsersComponent implements OnInit, OnChanges {
  @Input()
  Users: User[] = [];
  rows: any[] = [];
  router: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.Users = this.userService.getAll();
    this.rows = this.groupColumns(this.Users);
    console.log(this.rows);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.Users) {
      this.rows = this.groupColumns(this.Users);
    }
    console.log(this.rows);
  }

  groupColumns(Users: User[]) {
    const newRows = [];

    for (let index = 0; index < Users.length; index += 3) {
      newRows.push(Users.slice(index, index + 3));
    }
    return newRows;
  }

  goToUser(username: string) {
    console.log("aqui");
    this.router.navigate(["/user", username]);
  }
}
