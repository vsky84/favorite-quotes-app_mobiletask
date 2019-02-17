import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabspagePage } from './../pages/tabspage/tabspage';
import { SettingsPage } from './../pages/settings/settings';
import { QuotePage } from './../pages/quote/quote';
import { QuotesPage } from './../pages/quotes/quotes';
import { AddquotePage } from './../pages/addquote/addquote';
import { LibraryPage } from './../pages/library/library';
import { FavoritesPage } from './../pages/favorites/favorites';
import { QuotesService } from './../services/quotes';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddquotePage,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabspagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddquotePage,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabspagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
