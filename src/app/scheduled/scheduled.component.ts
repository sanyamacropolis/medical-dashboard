import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.css']
})
export class ScheduledComponent implements OnInit {

   constructor(private router: Router){
  }

  public onscheduledClick(){
      this.router.navigate(['./update']);
  }

  ngOnInit() {
  }

}
