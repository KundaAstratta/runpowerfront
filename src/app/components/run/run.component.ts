import { Component, OnInit } from '@angular/core';
import { RunService } from 'src/app/services/run.service';
import { PowerActivityDTO } from 'src/app/shared-data/power-activity-dto';
import { StatisticsPowerActivityDTO } from 'src/app/shared-data/statistics-power-activity-dto';
import { AthleteDTO } from 'src/app/shared-data/athlete-dto';
import { ActivatedRoute } from '@angular/router';
import { ExternalConditionDTO } from 'src/app/shared-data/external-condition-dto';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {

  powerActivityLines: PowerActivityDTO[] = [];
  statisticsPowerActivity: StatisticsPowerActivityDTO = null;
  externalCondition: ExternalConditionDTO = null;
  athlete: AthleteDTO = null;

  showSpinner = true;

  plotPowerVersusTime: any;
  optionsPowerVersusTime: any;
  dataPowerTime: any[] = [];

  plotPowerVersusDistance: any;
  optionsPowerVersusDistance: any;
  dataPowerDistance: any[] = [];

  plotPowerVersusSpeed: any;
  optionsPowerVersusSpeed: any;
  dataPowerSpeed: any[] = [];

  plotPowerVersusPace: any;
  optionsPowerVersusPace: any;
  dataPowerPace: any[] = [];

  plotPowerVersusHearthrate: any;
  optionsPowerVersusHearthrate: any;
  dataPowerHearthrate: any[] = [];

  plotPowerVersusZone: any;
  optionsPowerVersusZone: any;

  colorOfPowerPoint = 'rgb(255, 185, 79)';

  index: number;

  activityid: number;

  athleteid: number;


  constructor(private runService: RunService,
              private activeRoute:  ActivatedRoute) { }

  ngOnInit() {
    this.activityid = Number(this.activeRoute.snapshot.paramMap.get('activityid'))
    this.athleteid = Number(sessionStorage.getItem('athleteid'));
    this.athleteid = 1;

    this.runService.getOneAthleteById(this.athleteid).subscribe(
      (athletepower) => {
        this.athlete = athletepower;
        console.log(this.athlete);
      }
    );

    this.runService.getOneStatistics(this.athleteid,this.activityid).subscribe(
      (statisticspower) => {
        this.statisticsPowerActivity = statisticspower;
        console.log(this.statisticsPowerActivity);
      }
    );

    this.runService.getOneExternalCondition(this.athleteid,this.activityid).subscribe(
      (externalcondition) => {
        this.externalCondition = externalcondition;
        console.log(this.externalCondition);
      }
    );

    this.runService.getOneRun(this.athleteid,this.activityid).subscribe((runpower) => {
        this.powerActivityLines = runpower;
        this.showSpinner = false;
        console.log(this.powerActivityLines);
        this.index = 0;
        while (this.index < this.powerActivityLines.length) {
          this.dataPowerSpeed.push({
          x: this.powerActivityLines[this.index].speed,
            y: this.powerActivityLines[this.index].power, r: 5
          });
          this.dataPowerPace.push({
          x: this.powerActivityLines[this.index].pace,
            y: this.powerActivityLines[this.index].power, r: 5
          });
          this.dataPowerHearthrate.push({
          x: this.powerActivityLines[this.index].hearthrate,
            y: this.powerActivityLines[this.index].power, r: 5
          });
          this.dataPowerDistance.push({
          x: this.powerActivityLines[this.index].distance,
            y: this.powerActivityLines[this.index].power, r: 2
          });
          this.dataPowerTime.push({
          x: this.powerActivityLines[this.index].timezone,
            y: this.powerActivityLines[this.index].power, r: 2
          });
          this.index = this.index + 1;
        }
        this.showChartPowerVersusTime();
        this.showChartPowerVersusDistance();
        this.showChartPowerVersusSpeed();
        this.showChartPowerVersusPace();
        this.showChartPowerVersusHearthrate();
        this.showChartPowerVersusZone();
      });

  }

  private showChartPowerVersusHearthrate() {
    this.plotPowerVersusHearthrate = {
      datasets: [{
        label: ['Power', 'BPM'],
        data: this.dataPowerHearthrate,
        backgroundColor: this.colorOfPowerPoint
      }]
    };
    this.optionsPowerVersusHearthrate = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Power (W)',
            fontSize: 20
          },
          ticks: {
            stepSize: 20
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'BPM',
            fontSize: 20
          },
          ticks: {
            stepSize: 2
          }
        }]
      },
      title: {
        display: true,
        text: 'Power Effort Hearthrate',
        fontSize: 20
      },
      legend: {
        display: false
      }
    };
  }

  private showChartPowerVersusPace() {
    this.plotPowerVersusPace = {
      datasets: [{
        label: ['Power', 'Pace'],
        data: this.dataPowerPace,
        backgroundColor: this.colorOfPowerPoint
      }]
    };
    this.optionsPowerVersusPace = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Power',
            fontSize: 20
          },
          ticks: {
            stepSize: 20
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Pace',
            fontSize: 20
          },
          ticks: {
            stepSize: 2
          }
        }]
      },
      title: {
        display: true,
        text: 'Power versus Pace',
        fontSize: 20
      },
      legend: {
        display: false
      }
    };
  }

  private showChartPowerVersusSpeed() {
    this.plotPowerVersusSpeed = {
      datasets: [{
        label: ['Power', 'Speed'],
        data: this.dataPowerSpeed,
        backgroundColor: this.colorOfPowerPoint
      }]
    };
    this.optionsPowerVersusSpeed = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Power',
            fontSize: 20
          },
          ticks: {
            stepSize: 20
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Speed',
            fontSize: 20
          },
          ticks: {
            stepSize: 2
          }
        }]
      },
      title: {
        display: true,
        text: 'Power versus Speed',
        fontSize: 20
      },
      legend: {
        display: false
      }
    };
  }

private showChartPowerVersusDistance() {
  this.plotPowerVersusDistance = {
    datasets: [{
      label: ['Power', 'Distance'],
      data: this.dataPowerDistance,
      backgroundColor: this.colorOfPowerPoint
    }]
  };
  this.optionsPowerVersusDistance = {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Power (W)',
          fontSize: 20
        },
        ticks: {
          stepSize: 20
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Distance (m)',
          fontSize: 20
        },
        ticks: {
          display: false
        }
      }]
    },
    title: {
      display: true,
      text: '',
      fontSize: 20
    },
    legend: {
      display: false
    }
  };
}

 private showChartPowerVersusTime() {
  this.plotPowerVersusTime = {
    datasets: [{
      label: ['Power', 'Time'],
      data: this.dataPowerTime,
      backgroundColor: this.colorOfPowerPoint
    }]
  };
  this.optionsPowerVersusTime = {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Power (W)',
          fontSize: 20
        },
        ticks: {
          stepSize: 20
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Time (s)',
          fontSize: 20
        },
        ticks: {
          display: false
        }
      }]
    },
    title: {
      display: true,
      text: '',
      fontSize: 20
    },
    legend: {
      display: false
    }
  };
}

private showChartPowerVersusZone() {
  this.plotPowerVersusZone = {
  labels: ['Easy', 'Marathon', 'Threshold', 'Interval', 'Repetition'],
  datasets: [
      {
          label: 'Power Zone',
          backgroundColor: this.colorOfPowerPoint,
          borderColor: this.colorOfPowerPoint,
          data: [this.statisticsPowerActivity.nbrofeasy, this.statisticsPowerActivity.nbrofmarathon, this.statisticsPowerActivity.nbrofthreshold, this.statisticsPowerActivity.nbrofinterval, this.statisticsPowerActivity.nbrofrepetition]
      }
  ]
  };
  this.optionsPowerVersusZone = { 
    scales: {
      yAxes: [{
          ticks: {
          display : false
        },
        scaleLabel: {
          display: true,
          labelString: 'Power Effort (W)',
          fontSize: 20
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Effort Zone',
          fontSize: 20
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
