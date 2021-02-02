/// <reference types="@types/googlemaps" />
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormBuilder , FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


declare let google: any;



@Component({
  selector: 'app-book',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit , AfterViewInit {

  // today =new Date();
   // min=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()+1)
   // max =new Date(this.today.getFullYear(),this.today.getMonth()+3,this.today.getDate())

  constructor(private mapsApiLoader: MapsAPILoader, private ngZone: NgZone, public fb: FormBuilder) {

    this.myForm = this.fb.group({
      TimeFrame: [''],
      name: ['', Validators.required],
      date: ['', [Validators.required]]

    });
    this.user = firebase.auth().currentUser;

   }

  user: any = {};
  message = '';
  wtf: any;

  @ViewChild('search', {static: false}) searchElementRef: ElementRef;



  public searchControl: FormControl;
  public searchControlDest: FormControl;




  timeframeList: any[] = [{
    name: 'Today'
  }, {
    name: 'This Week'
  }, {
    name: 'This Month'
  }
  ];

  selectedTempo = 'Filter by Time Frame';
  clients: any[] = [];


  myForm: FormGroup;
  selectOption(event) {
    // console.log(event)

  }
  selectItem(event) {

    // console.log(event)
  }

  ngOnInit() {

    // this.searchControl =new FormControl();
    // this.searchControlDest=new FormControl();
this.getClients();
  }

  getClients() {
    firebase.firestore().collectionGroup('temperatures')
    // .where('place','==','Checkers')
    // .orderBy('date')
    .get().then((data) => {
      data.docs.forEach((clientslist) => {
        this.clients.push(clientslist.data());
        this.wtf = clientslist.data();
      });
      console.log(this.wtf);
    });
  }



  ngAfterViewInit() {


  }


}
