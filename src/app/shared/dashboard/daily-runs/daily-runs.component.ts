import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { ActivityService } from "src/app/core/data/activity.service";
import { Activity } from "src/app/core/data/activity";

@Component({
  selector: "app-daily-runs",
  templateUrl: "./daily-runs.component.html",
  styleUrls: ["./daily-runs.component.sass"]
})
export class DailyRunsComponent implements OnInit {
  chart = [];

  activities: Activity[] = [];
  dates: any[];
  expensesAmount: any[];
  expensesAvg: any[];
  expensesSum: any[];
  public sumExpendend: number;

  constructor(private dashboardService: ActivityService) {}

  ngOnInit() {
    this.expensesAvg = [];
    this.expensesSum = [];
    this.activities = this.dashboardService.getAll();
    this.dates = this.activities.map(act =>
      act.dateActivity.toLocaleDateString()
    );

    this.expensesAmount = this.activities.map(el => el.distance);
    this.sumExpendend = 0;
    for (let index = 0; index < this.expensesAmount.length; index++) {
      this.sumExpendend += this.expensesAmount[index];
    }

    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: this.dates,
        datasets: [
          {
            data: this.expensesAmount,
            borderColor: "red",
            fill: false
          }
        ]
      },

      // #3cba9f
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
