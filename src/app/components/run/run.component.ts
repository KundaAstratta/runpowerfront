import { Component, OnInit } from '@angular/core';
import { RunService } from 'src/app/services/run.service';
import { PowerActivityDTO } from 'src/app/shared-data/power-activity-dto';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {

  powerActivityLines : PowerActivityDTO[] = [];

  showSpinner = true;

  plotPowerVersusTime: any;
  axisXTime: number[] = [0];
  axisYPower: number[] = [0];

  index: number;

  constructor(private runService : RunService) { }

  ngOnInit() {
    this.runService.getOneRun().subscribe((runpower) => {
      this.powerActivityLines = runpower;
      this.showSpinner = false;

      console.log(this.powerActivityLines);
    
      this.index= 0;

      while (this.index < this.powerActivityLines.length) 
      {  
         this.axisXTime.push(this.powerActivityLines[this.index].timezone);
         this.axisYPower.push(this.powerActivityLines[this.index].power);
         this.index = this.index + 1;
       } ;

     this.plotPowerVersusTime= {
          labels: this.axisXTime,
          datasets: [
                    {
                    label: 'Power',
                    data: this.axisYPower
                    }
              ]
           };


    });

  }   

}
