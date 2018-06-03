webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.email = "bsaraswat45@gmail.com";
        this.password = "bhansa293";
    }
    HomePage.prototype.setData = function () {
        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();
        // 	db.collection("ANGELHACK-USER-Details").add({
        //     fullname: "Bharat Saraswat",
        //     aadharid: 900080007000,
        //     coordinates: [23, 67]
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
    };
    HomePage.prototype.redirectToUser = function () {
    };
    HomePage.prototype.authLogin = function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function () {
            alert('logged in');
        })
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            alert(errorCode);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/home/home.html"*/'<ion-header>\n<ion-navbar>\n<button ion-button menuToggle>\n<ion-icon name="menu"></ion-icon>\n</button>\n<ion-title>Manage properties smartly</ion-title>\n</ion-navbar>\n</ion-header>\n\n<!-- Page Content -->\n<section class="home">\n<div class="home-container">\n<div class="row" justify-content-center>\n<div class="col-lg-6">\n<h1 class="mt-5">Smart Land Registro</h1>\n<p>Smart solution for land registration, buy, sell or transfer ownership.</p>\n</div>\n</div>\n</div>\n</section>'/*ion-inline-end:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_loginfile__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_model__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var storage = firebase.storage();
var UserComponent = /** @class */ (function () {
    function UserComponent(_http, _logger, modalCtrl) {
        var _this = this;
        this._http = _http;
        this._logger = _logger;
        this.modalCtrl = modalCtrl;
        this.AllUserInfo = [];
        this.OpenForSellList = [];
        this.BuyerItem = [];
        var data = { message: 'hello world' };
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__model_model__["a" /* ModalPage */], data);
        modalPage.present();
        modalPage.onDidDismiss(function (data) {
            console.log(data);
            _this._logger.loggerName = data.UserName + "@entropix.com";
            _this.loggerName = _this._logger.loggerName;
            _this.setData();
        });
    }
    UserComponent.prototype.setData = function () {
        var response = JSON.parse(localStorage.getItem("DATA"));
        console.log(response);
        this.JsonResult = response;
        for (var i = 0; i < this.JsonResult.length; i++) {
            if (this.JsonResult[i].email === this._logger.loggerName) {
                this.AllUserInfo.push(response[i]);
            }
        }
        console.log(this.AllUserInfo);
        for (var i = 0; i < this.JsonResult.length; i++) {
            if (this.JsonResult[i].email != this.loggerName && this.JsonResult[i].isopenforsell) {
                this.BuyerItem.push(this.JsonResult[i]);
            }
        }
        console.log(this.BuyerItem);
    };
    UserComponent.prototype.ngOnInit = function () {
        console.log("Here you are wellcome");
    };
    UserComponent.prototype.ngOnDestroy = function () {
        console.log("Thanks to visit us");
    };
    UserComponent.prototype.openSell = function () {
        for (var i = 0; i < this.OpenForSellList.length; i++) {
            for (var j = 0; j < this.JsonResult.length; j++) {
                if (this.OpenForSellList[i].adhar_id === this.JsonResult[j].adhar_id) {
                    this.JsonResult[j].isopenforsell = true;
                }
            }
        }
        console.log(this.JsonResult);
        localStorage.setItem("DATA", JSON.stringify(this.JsonResult));
    };
    UserComponent.prototype.addToSellList = function (item) {
        this.OpenForSellList.push(item);
    };
    UserComponent.prototype.Logout = function () {
        this._logger.loggerName = null;
        window.location.reload();
    };
    UserComponent.prototype.buymsg = function () {
        this.buyRequest = "A buy request has been send to the owner";
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/user/user.template.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>User</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <h2>Your Properties</h2>\n        <table border="1" class="table" width="100%">\n          <thead>\n              <tr>\n                <th>Select Property</th>\n                  <th>Aadhar ID</th> \n                  <th>Name of the owner</th>\n                  <th>Email ID</th>\n                  <th>gender</th>\n                  <th>Age</th>\n                  <th>Phone</th>\n                  <!-- <th>Registered Date</th> -->\n                  <th>Schedule of land</th>      \n                  <th>Rate/acre</th>      \n              </tr>\n          </thead> \n          <tbody>\n            <tr *ngFor="let item of AllUserInfo">\n              <td><ion-item>\n    <ion-checkbox [(ngModel)]="pepperoni" (click)="addToSellList(item)"></ion-checkbox>\n  </ion-item></td>\n              <td>{{item.adhar_id}}</td>\n              <td>{{item.name}}</td>\n              <td>{{item.email}}</td>\n              <td>{{item.gender}}</td>\n              <td>{{item.age}}</td>\n              <td>{{item.phone}}</td>\n              <td>{{item.address[0].city}} | {{item.address[0].landmark}} | {{item.address[0].pincode}}</td>\n              <td>~15 Lakhs*</td>\n            </tr> \n          </tbody> \n        </table> \n        <button ion-button (click)="openSell()">Make available for sell</button> \n        <button ion-button (click)="Logout()">Log out</button> \n\n\n        <h2>Your buying options</h2>\n\n        <table border="1" class="table" width="100%">\n          <thead>\n              <tr>\n                <!-- <th>Select Property</th> -->\n                  <th>Aadhar ID</th> \n                  <th>Name</th>\n                  <th>Email ID</th>\n                  <th>gender</th>\n                  <th>Age</th>\n                  <th>Phome</th>\n                  <!-- <th>Registered Date</th> -->\n                  <th>Address Info</th>\n                  <th>Action</th>\n\n              </tr>\n          </thead> \n          <tbody>\n            <tr *ngFor="let item of BuyerItem" >\n              <td> {{item.adhar_id}}</td>\n              <td>{{item.name}}</td>\n              <td>{{item.email}}</td>\n              <td>{{item.gender}}</td>\n              <td>{{item.age}}</td>\n              <td>{{item.phone}}</td>\n              <td>{{item.address[0].city}} | {{item.address[0].landmark}} | {{item.address[0].pincode}}</td>\n              <td><button (click)="buymsg();" ion-button>Buy</button></td>\n            </tr> \n          </tbody> \n        </table> \n\n        <div class="buy-request">{{buyRequest}}</div>\n\n  </ion-content>\n  '/*ion-inline-end:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/user/user.template.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__Service_loginfile__["a" /* LoginStatusCheck */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* ModalController */]])
    ], UserComponent);
    return UserComponent;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginStatusCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginStatusCheck = /** @class */ (function () {
    function LoginStatusCheck() {
        this.IsAnyLogger = true;
    }
    LoginStatusCheck = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoginStatusCheck);
    return LoginStatusCheck;
}());

//# sourceMappingURL=loginfile.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        console.log('ionViewDidLoad ModalPage');
        console.log(this.navParams.get('message'));
    }
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss({
            "UserName": this.username,
        });
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/model/model.html"*/'<ion-header>\n\n<ion-navbar>\n    <ion-title>Please provide your email id to continue</ion-title>\n    <ion-buttons end>\n    <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n\n  <ion-item>\n    <ion-label floating >Username</ion-label>\n    <ion-input type="text" [(ngModel)]="username" value="" width-100></ion-input>\n  </ion-item>\n<!-- \n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item> -->\n	\n</ion-list>\n<button ion-button (click)="closeModal()">Submit</button>\n</ion-content>	'/*ion-inline-end:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/model/model.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Service_loginfile__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_user_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_model_model__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_model_model__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_model_model__["a" /* ModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__Service_loginfile__["a" /* LoginStatusCheck */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_user_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._http = _http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            // {title:'Admin',component:AdminComponent},
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_5__pages_user_user_component__["a" /* UserComponent */] }
        ];
        if (localStorage.getItem("DATA") == undefined)
            localStorage.setItem("DATA", JSONDATA);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>My Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], MyApp);
    return MyApp;
}());

var JSONDATA = JSON.stringify([{
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
]);
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/admin/admin.template.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Admin</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    This is admin page\n  </ion-content>'/*ion-inline-end:"/home/bharat/work/AngelHack/SmartLandRegistration/client/src/pages/admin/admin.template.html"*/
        })
    ], AdminComponent);
    return AdminComponent;
}());

//# sourceMappingURL=admin.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map