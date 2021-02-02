import { Component, OnInit } from '@angular/core';
import { PointsService } from '../../points.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component implements OnInit {


  //variables
  points: number;
  click: boolean;
  levelNumber: number;

  //#endregion

  constructor(private http: HttpClient, private pointsService: PointsService,
    // private authService: AuthService
    ) { }

  ngOnInit() {
    //reset the click flag.
    this.click = false;

    //set the points to start counting.
    this.pointsService.setPoints();
  }

  //On Destroy unsubsribe to the subsription.
  ngOnDestroy() {

  }

  //this method recives the click event
  clicked(points: number) {
    //triggers the correct and wrong button answers and the text.
    this.click = true;

    //call the method to check the anwser
    if (points != 0) {
      this.pointsService.addPoints(points);
    }
  }

  //this method clears the click event
  cleanClick() {
    this.click = false;
  }

  //this method returns if the button was clicked
  isClicked() {
    return this.click;
  }

  //this method calls the authentication method
  authenticateUser() {
    // this.authService.authenticateAnonymously();
  }


}
