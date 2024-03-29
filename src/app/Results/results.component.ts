import { Component, OnInit, Input } from '@angular/core';
import { PointsService } from '../points.service';
import * as firebase from 'firebase';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  //variables
  filtered_points: string;
  progress_points: number;
  progress_color: string = "warn";
  mode: string = "indeterminate";
  userWithNoRecord: boolean = true;
  status: string;
  madeIt: boolean = false;
  level: number;
  nextLevel: string;

  constructor(private poinstService: PointsService, private authService: AuthService) { }

  //points from the points service
  @Input() points: number;

  ngOnInit() {
    //call the method to display points in the results.
    this.getPoints();
  }

  //this method gets the points to display
  getPoints() {

    setTimeout(() => {
      //get the points
      this.points = this.poinstService.getPoints();

      //check if it has points
      if (this.points == -1) {
        this.filtered_points = "no points!";
        this.progress_points = 0;
      }
      else {
        //tranform the points to the string of results
        this.filtered_points = this.points.toString() + " of 20 points!";

        if (this.points >= 14) {
          this.status = "Congratulations! You are through to the next level! 😊";
          this.madeIt = true;
          localStorage.setItem("level", "1");
          this.nextLevel = localStorage.getItem("level")
          console.log(parseInt(this.nextLevel) + 1);
        }

        //calculate the progress bar
        this.progress();
      }
    }, 1000)

    //return the result to be displayed
    return this.filtered_points;
  }

  //this method calculates the value of the progress bar.
  progress() {
    //calculate the progress
    this.progress_points = this.points * 100 / 20;

    //pick the progress color (turns primary if positive)
    if (this.progress_points >= 50) {
      this.progress_color = "primary"
    }

    //stops the bar from spinning
    this.mode = "determinate";
  }

  //this method returns if user is authenticated to display or not the results page
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
