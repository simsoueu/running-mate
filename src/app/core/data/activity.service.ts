import { Injectable } from "@angular/core";
import { Activity } from "./activity";

@Injectable()
export class ActivityService {
  current: number;
  playlist: Activity[] = [
    {
      name: "Corrida Av. Brasil",
      distance: 3351,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/10/2018 09:00:00"),
      datePost: new Date("05/05/2018 19:00:00"),
      authorUsername: "ana",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    },
    {
      name: "Corrida Av. Brasil",
      distance: 3359,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/10/2018 09:00:00"),
      datePost: new Date("08/09/2018 19:00:00"),
      authorUsername: "ana",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    },
    {
      name: "Corrida Av. Brasil",
      distance: 1300,
      description: "Corrida pela manhã",
      dateActivity: new Date("09/21/2018 09:00:00"),
      datePost: new Date("09/18/2018 19:00:00"),
      authorUsername: "ana",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    },
    {
      name: "Corrida Av. Brasil",
      distance: 2334,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/10/2018 09:00:00"),
      datePost: new Date("09/10/2018 19:00:00"),
      authorUsername: "ana",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    },
    {
      name: "Corrida Av. Brasil",
      distance: 2324,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/09/2018 09:00:00"),
      datePost: new Date("10/09/2018 19:00:00"),
      authorUsername: "ana",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    },
    {
      name: "Corrida Av. Brasil",
      distance: 3354,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/10/2018 09:00:00"),
      datePost: new Date("11/10/2018 19:00:00"),
      authorUsername: "ana",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    },
    {
      name: "Corrida Av. Brasil",
      distance: 3354,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/11/2018 09:00:00"),
      datePost: new Date("10/11/2018 19:00:00"),
      authorUsername: "fabio",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    },
    {
      name: "Corrida Rua Argentina",
      distance: 2325,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/11/2018 09:00:00"),
      datePost: new Date("10/11/2018 19:00:00"),
      authorUsername: "fabio",
      authorPictureUrl: null,
      timeSincePost: null,
      timeSincePostStr: null
    }
  ];

  random(): Activity {
    this.current = Math.floor(Math.random() * this.playlist.length);
    return this.playlist[this.current];
  }

  next(): Activity {
    return this.getNextActivity();
  }

  prev() {
    return this.getPrevActivity();
  }

  private getNextActivity(): Activity {
    if (this.current === this.playlist.length - 1) {
      this.current = 0;
    } else {
      this.current++;
    }

    return this.playlist[this.current];
  }

  private getPrevActivity(): Activity {
    if (this.current === 0) {
      this.current = this.playlist.length - 1;
    } else {
      this.current--;
    }

    return this.playlist[this.current];
  }

  public getActivitiesByUsername(username: string): any {
    return this.playlist.filter(act => act.authorUsername === username);
  }

  public getAll(): Activity[] {
    return this.playlist;
  }
}
