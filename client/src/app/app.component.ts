import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdminComponent } from '../pages/admin/admin.component';
import { UserComponent } from "../pages/user/user.component"
import {HttpClient} from "@angular/common/http"
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private _http:HttpClient) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      {title:'Admin',component:AdminComponent},
      {title:'User',component:UserComponent}
    ];
    if(localStorage.getItem("DATA") == undefined)
      localStorage.setItem("DATA",JSONDATA)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

const JSONDATA = JSON.stringify([{
        "adhar_id": 5584220348738490,
        "balance": "3,723.23",
        "age": 38,
        "name": "Simmons Wolf",
        "gender": "male",
        "email": "simmonswolf@entropix.com",
        "phone": "+91 (834) 577-2809",
        "registered": "2017-03-29T12:19:13 -06:-30",
        "address": [{
            "plot_no": 49,
            "street_name": "Madhapur Petrol Pump",
            "pincode": 500084,
            "landmark": "Hitech City",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 3623834058344375,
        "balance": "3,019.76",
        "age": 36,
        "name": "Natalie Vega",
        "gender": "female",
        "email": "natalievega@entropix.com",
        "phone": "+91 (915) 478-3079",
        "registered": "2017-05-14T02:59:21 -06:-30",
        "address": [{
            "plot_no": 15,
            "street_name": "100ft Road",
            "pincode": 500081,
            "landmark": "Kothaguda",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 8739415994858534,
        "balance": "1,306.36",
        "age": 20,
        "name": "Grimes Higgins",
        "gender": "male",
        "email": "grimeshiggins@entropix.com",
        "phone": "+91 (983) 445-2863",
        "registered": "2015-03-05T07:38:22 -06:-30",
        "address": [{
            "plot_no": 100,
            "street_name": "100ft Road",
            "pincode": 500084,
            "landmark": "Hitech City",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 6577576781817988,
        "balance": "2,730.11",
        "age": 22,
        "name": "Hunt Hickman",
        "gender": "male",
        "email": "hunthickman@entropix.com",
        "phone": "+91 (804) 568-3542",
        "registered": "2016-04-12T04:26:04 -06:-30",
        "address": [{
            "plot_no": 60,
            "street_name": "Madhapur Petrol Pump",
            "pincode": 500084,
            "landmark": "Hitech City",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 7241710458611084,
        "balance": "1,709.61",
        "age": 24,
        "name": "Miranda Harvey",
        "gender": "male",
        "email": "mirandaharvey@entropix.com",
        "phone": "+91 (917) 559-2241",
        "registered": "2015-04-20T10:57:46 -06:-30",
        "address": [{
            "plot_no": 39,
            "street_name": "100ft Road",
            "pincode": 500081,
            "landmark": "Madhapur",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 3265443213935050,
        "balance": "2,440.71",
        "age": 37,
        "name": "Josie Rogers",
        "gender": "female",
        "email": "josierogers@entropix.com",
        "phone": "+91 (838) 536-3768",
        "registered": "2015-05-30T12:50:42 -06:-30",
        "address": [{
            "plot_no": 69,
            "street_name": "Madhapur Petrol Pump",
            "pincode": 500084,
            "landmark": "Madhapur",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 8417519116389798,
        "balance": "3,300.48",
        "age": 26,
        "name": "Chrystal Dotson",
        "gender": "female",
        "email": "chrystaldotson@entropix.com",
        "phone": "+91 (857) 407-3251",
        "registered": "2017-04-26T07:54:35 -06:-30",
        "address": [{
            "plot_no": 10,
            "street_name": "100ft Road",
            "pincode": 500084,
            "landmark": "Madhapur",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 6236107312157340,
        "balance": "1,811.29",
        "age": 34,
        "name": "Serena Robles",
        "gender": "female",
        "email": "serenarobles@entropix.com",
        "phone": "+91 (821) 539-2354",
        "registered": "2015-09-17T06:48:24 -06:-30",
        "address": [{
            "plot_no": 66,
            "street_name": "100ft Road",
            "pincode": 500084,
            "landmark": "Madhapur",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 6748791627599878,
        "balance": "2,137.83",
        "age": 35,
        "name": "Lidia Martinez",
        "gender": "female",
        "email": "lidiamartinez@entropix.com",
        "phone": "+91 (929) 516-3675",
        "registered": "2018-05-03T06:24:27 -06:-30",
        "address": [{
            "plot_no": 68,
            "street_name": "Madhapur Petrol Pump",
            "pincode": 500084,
            "landmark": "Madhapur",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 6578145727343114,
        "balance": "2,880.11",
        "age": 23,
        "name": "Stephenson Bowers",
        "gender": "male",
        "email": "stephensonbowers@entropix.com",
        "phone": "+91 (860) 532-2257",
        "registered": "2017-06-09T06:29:27 -06:-30",
        "address": [{
            "plot_no": 75,
            "street_name": "Madhapur Petrol Pump",
            "pincode": 500081,
            "landmark": "Madhapur",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    },
    {
        "adhar_id": 3451876877550332,
        "balance": "3,102.43",
        "age": 33,
        "name": "Angela Glover",
        "gender": "female",
        "email": "angelaglover@entropix.com",
        "phone": "+91 (817) 410-3050",
        "registered": "2014-08-24T07:33:46 -06:-30",
        "address": [{
            "plot_no": 69,
            "street_name": "Madhapur Petrol Pump",
            "pincode": 500084,
            "landmark": "Hitech City",
            "city": "Hyderabad",
            "state": "Telangana"
        }],
        "isopenforsell": false
    }
])