import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsViewArtistPage } from '../pages/news/news-view-artist/news.view.artist';
import { ProfileArtistPage } from '../pages/profile/profile-artist/profile.artist';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { ProfileArtistService } from '../services/profile.artist.service';
import { NewsViewArtistService } from '../services/news.view.artist.service';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { DashboardRequestPage } from '../pages/dashboard/dashboardRequest/dashboard.request';
import { DashboardOfferPage } from '../pages/dashboard/dashboardOffer/dashboard.offer';
import { DashboardClosePage } from '../pages/dashboard/dashboardClose/dashboard.close';
import { EditProfilePage } from '../pages/profile/edit-profile/edit.profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    NewsViewArtistPage,
    DashboardPage,
    ProfileArtistPage,
    SubscribePage,
    DashboardRequestPage,
    DashboardOfferPage,
    DashboardClosePage,
    EditProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    NewsViewArtistPage,
    DashboardPage,
    ProfileArtistPage,
    SubscribePage,
    DashboardRequestPage,
    DashboardOfferPage,
    DashboardClosePage,
    EditProfilePage
  ],
  providers: [
    ProfileArtistService,
    NewsViewArtistService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
