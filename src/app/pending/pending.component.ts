import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

     constructor(private router: Router){
  }

  public onpendingClick(){
      this.router.navigate(['./setschedule']);
  }

  ngOnInit() {
  }

}
