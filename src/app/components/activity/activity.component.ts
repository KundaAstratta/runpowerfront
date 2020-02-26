import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { AthleteDTO } from 'src/app/shared-data/athlete-dto';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  
  XMLtoActivity : boolean;



  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    
  }

  createOneExternalCondition(ExternalConditionDTO): any {
    console.log("External Condition...");
    ExternalConditionDTO = {id:1,idathlete:1,idpoweractivity:1,pressureatm:10000,temperature:18,humidity:70,speedwind:10};
    console.log(ExternalConditionDTO);
    this.activityService.createOneExternalCondition(ExternalConditionDTO).subscribe(
      {
        complete(){
         console.log('ended');
       } 
     }
    );
  }

  createOneAthlete(AthleteDTO): any {
    console.log("Athlete...");
    AthleteDTO = {id:1,idathlete:1,  name:"Christophe", surname:"Humbert",mass:80,hearthmax:188};
    console.log(AthleteDTO);
    this.activityService.createOneAthlete(AthleteDTO).subscribe(
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
      next() {this.XMLtoActivity=false;},
      complete(){
        console.log('ended');
        this.XMLtoActivity = true;
        console.log(this.XMLtoActivity);
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
