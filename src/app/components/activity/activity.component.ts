import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

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


  onTransformXMLtoActivity():any {
    console.log("XML transformation");
  //  this.XMLtoActivity = false;
    this.activityService.transformXMLtoActivity().subscribe({
      next() {this.XMLtoActivity=false;},
      complete(){
        console.log('fini');
        this.XMLtoActivity = true;
        console.log(this.XMLtoActivity);
       // this.toShow();
        //this.onTransformActivityToPowerActivity();
        //this.activityService.transformActivityToPowerActivity();
      }
     
    });
   
  }

  onTransformActivityToPowerActivity():any {
    console.log("PowerActivity transformation");
    this.activityService.transformActivityToPowerActivity().subscribe({
       complete(){
        console.log('fini');
 //       this.XMLtoActivity = true;
 //       console.log(this.XMLtoActivity);
        //this.onTransformActivityToPowerActivity();
       // this.activityService.transformActivityToPowerActivity();
      }
     
    });

  }
  
}
