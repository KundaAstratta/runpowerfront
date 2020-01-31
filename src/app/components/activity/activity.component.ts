import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
  }

  onTransformXMLtoActivity() {
    console.log("XML transformation");
    this.activityService.transformXMLtoActivity();
    console.log("fini");
  }

  onTransformActivityToPowerActivity() {
    console.log("PowerActivity transformation");
    this.activityService.transformActivityToPowerActivity();
    console.log("fini");
  }

}
