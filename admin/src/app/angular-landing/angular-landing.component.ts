import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-landing',
  templateUrl: './angular-landing.component.html',
  styleUrls: ['./angular-landing.component.scss']
})
export class AngularLandingComponent implements OnInit {

  public title : string = 'admin';

  constructor() { 

  }

  ngOnInit(): void {

  }

}
