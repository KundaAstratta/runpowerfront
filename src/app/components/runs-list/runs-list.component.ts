import { Component, OnInit } from '@angular/core';
import { RunsListService } from 'src/app/services/runs-list.service';
import { StatisticsPowerActivityDTO } from 'src/app/shared-data/statistics-power-activity-dto';
import { RunService } from 'src/app/services/run.service';
import { AthleteDTO } from 'src/app/shared-data/athlete-dto';
import { PredictionDTO } from 'src/app/shared-data/prediction-dto';

@Component({
  selector: 'app-runs-list',
  templateUrl: './runs-list.component.html',
  styleUrls: ['./runs-list.component.scss']
})
export class RunsListComponent implements OnInit {

  athlete: AthleteDTO = null;

  statisticsPowerActivity: StatisticsPowerActivityDTO [] = [];

  prediction: PredictionDTO  = null;

  plotPowerMedianVersusDeviation: any;
  optionsPowerMedianVersusDeviation: any;
  dataPowerMedianDeviation: any[] = [];

  index: number;

  colorOfPowerPoint = 'rgb(255, 185, 79)';

  athleteId: number;

  constructor(private runsListService: RunsListService,
              private runService: RunService
    ) { }

  ngOnInit() {

    this.athleteId = Number(sessionStorage.getItem('athleteid'));
    this.athleteId = 1;
    this.runService.getOneAthleteById(this.athleteId).subscribe(
      (athletepower) => {
        this.athlete = athletepower;
        console.log(this.athlete);
      }
    );

    
    this.runsListService.getLastPredictionForOneAthlete(this.athleteId).subscribe(
      (prediction) => {
        this.prediction = prediction;
        console.log(this.prediction);
      }
    );    

  
   
    this.runsListService.getAllStatisticsActivityForOneAthlete(this.athleteId).subscribe(
      (statisticsPowerActivity) => {
          this.statisticsPowerActivity = statisticsPowerActivity;
          this.index = 0;
          while (this.index < this.statisticsPowerActivity.length) {
            this.dataPowerMedianDeviation.push({
              x: this.statisticsPowerActivity[this.index].deviation,
              y: this.statisticsPowerActivity[this.index].powermedian,
              r: 5 
            });
            this.index = this.index +1;
            }
          this.showChartPowerMedianVersusDeviation();
         
        });

       
   

  }


  private showChartPowerMedianVersusDeviation() {
    this.plotPowerMedianVersusDeviation = {
      datasets: [{
        label: ['Power Mediam', 'Deviation'],
        data: this.dataPowerMedianDeviation,
        backgroundColor: this.colorOfPowerPoint
      }]
    };
    this.optionsPowerMedianVersusDeviation = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Power Median (W)',
            fontSize: 20
          },
          ticks: {
            stepSize: 2
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Deviation',
            fontSize: 20
          },
          ticks: {
            stepSize: 2
          }
        }]
      },
      title: {
        display: true,
        text: 'Power Effort Repartition',
        fontSize: 20
      },
      legend: {
        display: false
      }
    };
    }

   

}