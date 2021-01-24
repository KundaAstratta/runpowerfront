import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

import { FormControl, FormGroup} from '@angular/forms';
import { RunService } from 'src/app/services/run.service';
import { AthleteDTO } from 'src/app/shared-data/athlete-dto';
import { TestObject } from 'protractor/built/driverProviders';


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
    pressureatm: new FormControl('100000'),
    temperature: new FormControl('10'),
    humidity: new FormControl('50'),
    speedwind: new FormControl('0'),
 });

  public showButtonCreateAnActivity = false;
  public showButtonTransformXML = true;
  public showState = false;
  public showButtonSaveAnAthlete = true; 
  public showButtonUpdateAnAthlete = false;
  public fileXML: string;
  valueNameFile: string = ".xml";
  athleteId: number;
  athleteIdString : string; 
  athlete: AthleteDTO = null;


  constructor(private runService: RunService,
              private activityService: ActivityService) { }

  ngOnInit() {
    this.showButtonTransformXML = true;
    this.showButtonCreateAnActivity = false;
    this.showState = false;
    this.showButtonSaveAnAthlete = true;
    this.showButtonUpdateAnAthlete = false;
    this.runService.getOneAthleteById(1).subscribe(
      athletepower => {
        this.athlete = athletepower;
        console.log(this.athlete);
        if (this.athlete.idathlete = 1) {
          this.AthleteForm = new FormGroup({
            name: new FormControl(this.athlete.name),
            surname: new FormControl(this.athlete.surname),
            mass: new FormControl(this.athlete.mass),
            hearthmax: new FormControl(this.athlete.hearthmax)
          });
          this.showButtonSaveAnAthlete = false;
          this.showButtonUpdateAnAthlete = true;
        } else {
          this.showButtonSaveAnAthlete = true;
          this.showButtonUpdateAnAthlete = false;
        }
      },
      err => {
        this.showButtonSaveAnAthlete = true;
        this.showButtonUpdateAnAthlete = false;
        console.log(err);
      }

    )    
  }

   async createOneAthlete() {
    console.log("Athlete...");
    
    sessionStorage.clear(); 
    const athleteid = await this.activityService.createOneAthlete({id:1,idathlete:1, name:(this.AthleteForm.value).name, surname:(this.AthleteForm.value).surname,mass:(this.AthleteForm.value).mass,hearthmax:(this.AthleteForm.value).hearthmax});
    this.showButtonSaveAnAthlete = false;
    this.showButtonUpdateAnAthlete = true;
    this.athleteIdString = String(athleteid);
    sessionStorage.setItem('athleteid', this.athleteIdString);
    console.log(this.athleteIdString);
    console.log('ended');
  }

  async updateOneAthlete() {
    console.log("Update...");
    await this.activityService.updateOneAthlete(1, {id:1,idathlete:1, name:(this.AthleteForm.value).name, surname:(this.AthleteForm.value).surname,mass:(this.AthleteForm.value).mass,hearthmax:(this.AthleteForm.value).hearthmax});
  }

  async onTransformXMLtoActivity(fileXML: string) {
    try { 
      console.log(fileXML);
      console.log("XML transformation");
      console.log(this.showButtonCreateAnActivity);
      this.showState = true;
      const message = await this.activityService.transformXMLtoActivity(fileXML);
      console.log(message.message);

      if (message.message == "exist") {
        this.showButtonCreateAnActivity = true;
        this.showButtonTransformXML = false;
        this.showState = false;
        console.log(this.showButtonCreateAnActivity);
      } else {
        this.showButtonCreateAnActivity = false;
        this.showButtonTransformXML = true;
        this.showState = false;
      }
    }
    catch (error) {
      this.showButtonCreateAnActivity = false;
      this.showButtonTransformXML = true;
      this.showState = false;
      console.log("error " + error);
    }
  }

  async createExternalConditionToPrediction() {
    console.log("External Condition To Prediction...");
    console.log(this.showButtonCreateAnActivity);
    this.showState = true;
    this.athleteId = Number(sessionStorage.getItem('athleteid'));
    this.athleteId = 1;
    console.log("athlete Id " + this.athleteId);
    await this.activityService.createExternalConditionToPrediction(this.athleteId,{id:this.athleteId,idathlete:this.athleteId,idpoweractivity:1,pressureatm:(this.ExternalConditionForm.value).pressureatm,temperature:(this.ExternalConditionForm.value).temperature,humidity:(this.ExternalConditionForm.value).humidity,speedwind:(this.ExternalConditionForm.value).speedwind});
    this.showButtonCreateAnActivity = false;
    this.showButtonTransformXML = true;
    this.showState = false ;
    this.valueNameFile = ".xml";
    console.log(this.showButtonCreateAnActivity);
  }
}
