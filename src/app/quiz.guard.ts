import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizGuard implements CanActivate {
  unlock = localStorage.getItem("level");


  constructor(private router:Router){

  }


  canActivate() {
      if ( this.unlock ) {
       return true;
      } else {
        this.router.navigate(['/dashboard']);
       return false;
      }
    }

}
