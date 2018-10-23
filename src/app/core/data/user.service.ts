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
      fullname: "Pablo Lima",
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
      fullname: "Ana Clara",
      description: "",
      city: "Porto Alegre",
      country: "Brasil",
      createDate: new Date("12/12/2017 12:00:00"),
      photo: {
        url: "https://randomuser.me/api/portraits/women/18.jpg",
        description: "ana"
      }
    },
    {
      name: "Fabio",
      username: "fabio",
      fullname: "Fabio Moraes",
      description: "",
      city: "Recife",
      country: "Brasil",
      createDate: new Date("09/09/2017 20:00:00"),
      photo: {
        url: "https://randomuser.me/api/portraits/men/9.jpg",
        description: "fabio"
      }
    },
    {
      name: "Rodrigo",
      username: "rborge",
      fullname: "Rodrigo Borges",
      description: "",
      city: "Campinas",
      country: "Brasil",
      createDate: new Date("09/09/2017 20:00:00"),
      photo: {
        url: "https://randomuser.me/api/portraits/men/11.jpg",
        description: "rodrigo"
      }
    }
  ];

  random(): User {
    this.current = Math.floor(Math.random() * this.playlist.length);
    return this.playlist[this.current];
  }

  public getUserByUsername(username: string) {
    return this.playlist.find(u => u.username === username);
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
