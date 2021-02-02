import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string, name: string, contanctNumber: number) {
    return new Promise((resolve , reject) => {

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const scretkey = Math.floor(Math.random() * 100000);
        const uid = response.user.uid;

        const user = {
            email,
            name,
            // password,
            contanctNumber,
            scretkey,
            // uid,
          };


        this.addUserInDB(user, uid)
        .then((x) => {
          // name: user.name,
          // email: user.email,

        response.user.updateProfile({
          displayName: name,
          // photoURL: 'https://api.adorable.io/avatars/'+ randomNumber
        }).then(() => {
          resolve();
        }).catch((error) => {
          reject(error);
        });

      }).catch((error) => {
        reject(error);
      });



    });
  });
  }

  addUserInDB(user: {}, uid: any) {
    return firebase.firestore().collection('shops').doc(uid).set(user);
  }

}
