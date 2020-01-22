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

  //dataPowerSpeed: any[] = [{x: 10 , y: 140}, {x: 12, y: 130}, {x: 5, y: 140}];
  site  = {
    x: [],
    y: []
  };


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

         this.site.x.push(this.powerActivityLines[this.index].speed);
         this.site.y.push(this.powerActivityLines[this.index].power);

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
            fontSize: 16
          },
          legend: {
            position: 'bottom'
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
            fontSize: 16
          },
          legend: {
            position: 'bottom'
        }
      };



    //  for (var i = 0; i < this.powerActivityLines.length; i++) {

      this.plotPowerVersusSpeed = {
          datasets: [{
            data: [{
              x: this.site.x[1],
              y: this.site.y[1],
          }],
            backgroundColor: "#FF9966"
          }]
      };
      this.optionsPowerVersusSpeed = {
        scales: {
          yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Power'
                  },
                  ticks: {
                      beginAtZero: true,
                      max: 200}
              }],
          xAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Speed'
                  },
                  ticks: {
                      beginAtZero: true,
                      max: 20}
              }]
        },
        title: {
          display: true,
          text: 'Power versus Speed',
          fontSize: 16
        },
        legend: {
          position: 'bottom'
      }
      };

  //  }
    });

  }

}
