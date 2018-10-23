import { Injectable } from "@angular/core";
import { Achievement } from "./achievement";

@Injectable()
export class AchievementService {
  current: number;
  playlist: Achievement[] = [
    {
      name: "Melhor tempo",
      distance: 3351,
      description: "Corrida pela manhã",
      dateAchievement: new Date("10/10/2018 09:00:00"),
      duration: 22,
      datePost: new Date("05/05/2018 19:00:00"),
      authorUsername: "ana"
    },
    {
      name: "Terceiro melhor tempo",
      distance: 3359,
      description: "Corrida pela manhã",
      dateAchievement: new Date("10/10/2018 09:00:00"),
      duration: 30,
      datePost: new Date("08/09/2018 19:00:00"),
      authorUsername: "ana"
    },

    {
      name: "Segundo melhor tempo",
      distance: 2325,
      description: "Corrida pela manhã",
      dateAchievement: new Date("10/11/2018 09:00:00"),
      duration: 43,
      datePost: new Date("10/11/2018 19:00:00"),
      authorUsername: "fabio"
    }
  ];

  random(): Achievement {
    this.current = Math.floor(Math.random() * this.playlist.length);
    return this.playlist[this.current];
  }

  next(): Achievement {
    return this.getNextAchievement();
  }

  prev() {
    return this.getPrevAchievement();
  }

  private getNextAchievement(): Achievement {
    if (this.current === this.playlist.length - 1) {
      this.current = 0;
    } else {
      this.current++;
    }

    return this.playlist[this.current];
  }

  private getPrevAchievement(): Achievement {
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

  public getAll(): Achievement[] {
    return this.playlist;
  }
}
