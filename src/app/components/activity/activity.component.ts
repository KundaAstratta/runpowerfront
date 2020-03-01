import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

import { FormControl, FormGroup} from '@angular/forms';

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

  ExternalConditionForm = new FormGroup({
    pressureatm: new FormControl(''),
    temperature: new FormControl(''),
    humidity: new FormControl(''),
    speedwind: new FormControl(''),

 });


  constructor(private activityService: ActivityService) { }

  ngOnInit() {

  }

  createOneExternalCondition(): any {
    console.log("External Condition...");
    this.activityService.createOneExternalCondition({id:1,idathlete:1,idpoweractivity:1,pressureatm:(this.ExternalConditionForm.value).pressureatm,temperature:(this.ExternalConditionForm.value).temperature,humidity:(this.ExternalConditionForm.value).humidity,speedwind:(this.ExternalConditionForm.value).speedwind}).subscribe(
      {
        complete(){
         console.log('ended');
       } 
     }
    );
  }

  createOneAthlete(): any {
    console.log("Athlete...");
    this.activityService.createOneAthlete({id:1,idathlete:1, name:(this.AthleteForm.value).name, surname:(this.AthleteForm.value).surname,mass:(this.AthleteForm.value).mass,hearthmax:(this.AthleteForm.value).hearthmax}).subscribe(
      {
        complete(){
         console.log('ended');
       } 
     }
    );
  }

  onTransformXMLtoActivity():any {
    console.log("XML transformation");
    this.activityService.transformXMLtoActivity().subscribe({
      complete(){
        console.log('ended');
      }    
    });  
  }


  onTransformActivityToPowerActivity():any {
    console.log("PowerActivity transformation");
    this.activityService.transformActivityToPowerActivity().subscribe({
       complete(){
        console.log('ended');
      } 
    });
  }

  onTransformPowerActivityToStatistics():any {
    console.log('Statistics transformation');
    this.activityService.transformPowerActivityToStatistics().subscribe({
        complete(){
          console.log('ended');
        }
    });
  }
  
}
