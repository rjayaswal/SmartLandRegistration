import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {LoginStatusCheck} from "../Service/loginfile"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdminComponent } from "../pages/admin/admin.component"
import {UserComponent} from "../pages/user/user.component"
import {HttpClientModule} from "@angular/common/http"
import {ModalPage} from "../pages/model/model";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminComponent,
    UserComponent,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminComponent,
    UserComponent,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginStatusCheck,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
