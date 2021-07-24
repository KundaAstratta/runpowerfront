import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

import { FormControl, FormGroup} from '@angular/forms';
import { RunService } from 'src/app/services/run.service';
import { AthleteDTO } from 'src/app/shared-data/athlete-dto';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  
  AthleteForm = new FormGroup({
     name: new FormControl(''),
     surname: new FormControl(''),
     mass: new FormControl(''),
     hearthmax: new FormControl(''),

  });
  athleteId: number;
  athlete: AthleteDTO = null;


  constructor(private runService: RunService,
              private activityService: ActivityService) { }

  ngOnInit() {
    this.athleteId = 1;
    
    this.activityService.getOneAthleteById(this.athleteId).subscribe(
      athletepower => {
        this.athlete = athletepower;
        console.log(this.athlete);
          this.AthleteForm = new FormGroup({
            name: new FormControl(this.athlete.name),
            surname: new FormControl(this.athlete.surname),
            mass: new FormControl(this.athlete.mass),
            hearthmax: new FormControl(this.athlete.hearthmax)
          });
      },
      err => {
        console.log(err);
      }
    )    
  }


}
