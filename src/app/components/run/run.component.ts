import { Component, OnInit } from '@angular/core';
import { RunService } from 'src/app/services/run.service';
import { PowerActivityDTO } from 'src/app/shared-data/power-activity-dto';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {

  powerActivityLines: PowerActivityDTO[] = [];

  showSpinner = true;

  axisYPower: number[] = [];
  axisXTime: number[] = [];
  plotPowerVersusTime: any;
  optionsPowerVersusTime: any;

  axisXDistance: number[] = [];
  plotPowerVersusDistance: any;
  optionsPowerVersusDistance: any;

  dataPowerSpeed: any[] = [];

  axisXSpeed: number[] = [];
  plotPowerVersusSpeed: any;
  optionsPowerVersusSpeed: any;

  index: number;

  constructor(private runService: RunService) { }

  ngOnInit() {
    this.runService.getOneRun().subscribe((runpower) => {
      this.powerActivityLines = runpower;
      this.showSpinner = false;

      console.log(this.powerActivityLines);

      this.index = 0;

      while (this.index < this.powerActivityLines.length) {
         this.axisXTime.push(this.powerActivityLines[this.index].timezone);
         this.axisXDistance.push(this.powerActivityLines[this.index].distance);
         this.axisYPower.push(this.powerActivityLines[this.index].power);
         this.axisXSpeed.push(this.powerActivityLines[this.index].speed);

         this.dataPowerSpeed.push({x:this.powerActivityLines[this.index].speed,y:this.powerActivityLines[this.index].power,r:5});

         this.index = this.index + 1;
       }

      this.plotPowerVersusTime = {
          labels: this.axisXTime,
          datasets: [{
                    label: 'Power',
                    data: this.axisYPower,
                    borderColor: 'rgb(255, 185, 79)',
                    fill: false
          }
          ]
      };
      this.optionsPowerVersusTime = {
          title: {
            display: true,
            text: 'Power versus Time',
            fontSize: 18
          },
          legend: {
            display: false,
            position: 'bottom'
          },
          scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
           }
      };

      this.plotPowerVersusDistance = {
          labels: this.axisXDistance,
          datasets: [{
                    label: 'Power',
                    data: this.axisYPower,
                    borderColor: 'rgb(255, 185, 79)',
                    fill: false
          }
          ]
      };
      this.optionsPowerVersusDistance = {
          title: {
            display: true,
            text: 'Power versus Distance',
            fontSize: 18
          },
          legend: {
            display: false,
            position: 'bottom'
        },
        scales: {
          xAxes: [{
              ticks: {
                  display: false
              }
          }]
         }
      };

      this.plotPowerVersusSpeed = {
          datasets: [{
            label: ['Power','Speed'],
            data: this.dataPowerSpeed,
            backgroundColor: 'rgb(255, 185, 79)'
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
          fontSize: 18
        },
        legend: {
          display: false,
          position: 'bottom'
      }
      };

 
    });

  }

}
