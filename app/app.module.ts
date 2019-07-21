import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { LunesPage } from '../pages/lunes/lunes';
import { CalendarioPage } from '../pages/calendario/calendario';
import { ContactPage } from '../pages/contact/contact';
import { FollowPage } from '../pages/follow/follow';
import { HomePage } from '../pages/home/home';
import { BarPage } from '../pages/bar/bar';
import { DescrpPage } from '../pages/descrp/descrp';
import { TabsPage } from '../pages/tabs/tabs';


import { FileOpener } from '@ionic-native/file-opener';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CallNumber } from '@ionic-native/call-number';


export const firebaseConfig = {
 apiKey: "AIzaSyBmUo0RyVktglEN-01_8nyQVS0ydX2J3JI",
    authDomain: "sonpromocion-53b8e.firebaseapp.com",
    databaseURL: "https://sonpromocion-53b8e.firebaseio.com",
    projectId: "sonpromocion-53b8e",
    storageBucket: "sonpromocion-53b8e.appspot.com",
    messagingSenderId: "190536986288"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    FollowPage,
    CalendarioPage,
    DescrpPage,
    LunesPage,
    HomePage,
    BarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    FollowPage,
    LunesPage,
    DescrpPage,
    BarPage,
    CalendarioPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileOpener,
    DocumentViewer,
    AngularFireDatabase,
    CallNumber,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
