import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


export interface temps {
place: string,
date: Date,
temp: number
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private tempCollection : AngularFirestoreCollection<temps>;
   jQuery: any;
   loggedIn:boolean=false;
   user:any

  constructor(
    private afs: AngularFirestore
  ) {
    this.tempCollection = this.afs.collection<temps>('temperatures');
    this.user=firebase.auth().currentUser;
    if(this.user){
      this.loggedIn=true;
    }else{
      this.loggedIn=false;
    }

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.loggedIn=true;
      }else{
        this.loggedIn=false;
      }
    })
  }

  ngOnInit() {
    this.getData().subscribe(data => console.log(data));
    this.getAllData().subscribe(data => console.log(data));
  }


  getData() {
    return this.tempCollection
    .snapshotChanges()
      .pipe(
        map((data) => {
          return data.map((values) => {
            const data = values.payload.doc.data();
            const id = values.payload.doc.id;
            return { id, data };
          });
        })
      );
    //   map(res => {
    //     return res.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.data();
    //       return {id, ...data};
    //     });
    //   })
    // )
  }


  getAllData() {
    return this.afs
      .collectionGroup('temperatures')
      .snapshotChanges()
      .pipe(
        map((data) => {
          return data.map((values) => {
            const data = values.payload.doc.data();
            const id = values.payload.doc.id;
            return { id, data };
          });
        })
      );
  }
}
