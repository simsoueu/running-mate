import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor() {}

  current: number;
  playlist: User[] = [
    {
      name: "Pablo",
      username: "pablo",
      description: "",
      city: "Belo Horizonte",
      country: "Brasil",
      createDate: new Date("10/10/2017 12:00:00"),
      photo: {
        url: "https://randomuser.me/api/portraits/men/3.jpg",
        description: "pablo"
      }
    },
    {
      name: "Ana",
      username: "ana",
      description: "",
      city: "Porto Alegre",
      country: "Brasil",
      createDate: new Date("12/12/2017 12:00:00"),
      photo: {
        url: "https://randomuser.me/api/portraits/women/18.jpg",
        description: "pablo"
      }
    },
    {
      name: "Fabio",
      username: "fabio",
      description: "",
      city: "Recife",
      country: "Brasil",
      createDate: new Date("09/09/2017 20:00:00"),
      photo: {
        url: "https://randomuser.me/api/portraits/men/9.jpg",
        description: "pablo"
      }
    }
  ];

  random(): User {
    this.current = Math.floor(Math.random() * this.playlist.length);
    return this.playlist[this.current];
  }

  next(): User {
    return this.getNextUser();
  }

  prev() {
    return this.getPrevUser();
  }

  private getNextUser(): User {
    if (this.current === this.playlist.length - 1) {
      this.current = 0;
    } else {
      this.current++;
    }

    return this.playlist[this.current];
  }

  private getPrevUser(): User {
    if (this.current === 0) {
      this.current = this.playlist.length - 1;
    } else {
      this.current--;
    }

    return this.playlist[this.current];
  }

  public getAll(): User[] {
    return this.playlist;
  }
}
