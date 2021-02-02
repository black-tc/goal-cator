import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule, MatSelectModule, MatSortModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { LoginComponent } from './login/login.component';
import { CapitalizePipe } from './capitalize.pipe';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from "@agm/core";
import { DataService } from './data/data.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule  } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { Quiz1Component } from './Quizes/quiz1/quiz1.component';
import { PointsService } from './points.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from '../app/Results/results.component';
import { AuthService } from '../app/Auth/auth.service';
import { AuthGuardService } from './Auth/auth-guard.service';
import { StandingsComponent } from './standings/standings.component';
import { Quiz2Component } from './Quizes/quiz2/quiz2.component';



var firebaseConfig = {
  apiKey: "AIzaSyAY3D9a8MaewowiPZDtZDRQNpfTqkYDnDM",
    authDomain: "goal-cator-77502.firebaseapp.com",
    projectId: "goal-cator-77502",
    storageBucket: "goal-cator-77502.appspot.com",
    messagingSenderId: "57478693482",
    appId: "1:57478693482:web:1e56501adb93caf27a8013",
    measurementId: "G-H9KZ9LJ6LB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CapitalizePipe,
    HomeComponent,
    MenuComponent,
    DashboardComponent,
    AboutusComponent,
    ResultsComponent,
    Quiz1Component,
    StandingsComponent,
    Quiz2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatSortModule,
    MatCardModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyANVw389Q10N46d9EvyUhbHwSP0KOycikY"
    }),
  ],
  providers: [PointsService, AuthService, DataService, AuthGuardService],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]
})
export class AppModule { }
