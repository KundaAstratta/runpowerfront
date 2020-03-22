import { Component, OnInit } from '@angular/core';
import { RunsListService } from 'src/app/services/runs-list.service';
import { StatisticsPowerActivityDTO } from 'src/app/shared-data/statistics-power-activity-dto';
import { RunService } from 'src/app/services/run.service';
import { AthleteDTO } from 'src/app/shared-data/athlete-dto';

@Component({
  selector: 'app-runs-list',
  templateUrl: './runs-list.component.html',
  styleUrls: ['./runs-list.component.scss']
})
export class RunsListComponent implements OnInit {

  athlete: AthleteDTO = null;

  statisticsPowerActivity: StatisticsPowerActivityDTO [] = [];

  constructor(private runsListService: RunsListService,
              private runService: RunService
    ) { }

  ngOnInit() {

    this.runService.getOneAthlete().subscribe(
      (athletepower) => {
        this.athlete = athletepower;
        console.log(this.athlete);
      }
    );

    this.runsListService.getAllStatisticsActivityForOneAthlete().subscribe(
      (statisticsPowerActivity) => {this.statisticsPowerActivity = statisticsPowerActivity;} 
      )

  }
}
