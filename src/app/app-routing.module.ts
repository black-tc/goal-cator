import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from './auth.guard';
// import { DataComponent } from './data/data.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Quiz1Component } from './Quizes/quiz1/quiz1.component';
import { Quiz2Component } from './Quizes/quiz2/quiz2.component';
import { ResultsComponent } from '../app/Results/results.component';
import { QuizGuard } from './quiz.guard';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: 'home', component: HomeComponent
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'signup', component: SignupComponent
}, {
  path: 'dashboard', component: DashboardComponent
},
{
  path: 'quiz-level1', component: Quiz1Component
},
{
  path: 'quiz-level2', component: Quiz2Component, canActivate: [QuizGuard]
},
 {
  path: 'info', component: AboutusComponent
},
{
  path: 'results', component: ResultsComponent
},
 {
  path: '**', redirectTo:  'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
