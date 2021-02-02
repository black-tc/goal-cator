import { Component, OnInit } from '@angular/core';
import { PointsService } from '../../points.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component implements OnInit {

   //variables
   points: number;
   click: boolean;
   levelNumber: number;

  constructor(private http: HttpClient, private pointsService: PointsService) { }

  ngOnInit() {
     //reset the click flag.
     this.click = false;

     //set the points to start counting.
     this.pointsService.setPoints();
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
