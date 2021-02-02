import { Injectable } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

export interface AdminUser {
  company: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  uid: string;
}

export interface AdminUsersMeta {
  company: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(

    private authService: AuthService) { }

    // addUserInDB(user: {}, uid: any) {
    //   return this.afs.collection('adminusers').doc(uid).set(user);
    // }


}


