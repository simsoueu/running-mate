import { Injectable } from "@angular/core";

export class Activity {
  name: string;
  mettersRun: number;
  description: string;
  dateActivity: Date;
  datePost: Date;
}

@Injectable()
export class ActivityService {
  current: number;
  playlist: Activity[] = [
    {
      name: "Corrida Av. Brasil",
      mettersRun: 2324,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/09/2018 09:00:00"),
      datePost: new Date("10/09/2018 19:00:00")
    },
    {
      name: "Corrida Av. Brasil",
      mettersRun: 3354,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/10/2018 09:00:00"),
      datePost: new Date("10/10/2018 19:00:00")
    },
    {
      name: "Corrida Rua Argentina",
      mettersRun: 2325,
      description: "Corrida pela manhã",
      dateActivity: new Date("10/11/2018 09:00:00"),
      datePost: new Date("10/11/2018 19:00:00")
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
}
