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

  constructor(private runService : RunService) { }

  ngOnInit() {
    this.runService.getOneRun().subscribe((runpower) => {
      this.powerActivityLines = runpower;
      this.showSpinner = false;
      console.log(this.powerActivityLines);
    });

  }  

}
