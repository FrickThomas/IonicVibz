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
import { ProfileArtistService } from '../services/profile/profile.artist.service';
import { NewsViewArtistService } from '../services/news/news.view.artist.service';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { DashboardRequestPage } from '../pages/dashboard/dashboardRequest/dashboard.request';
import { DashboardOfferPage } from '../pages/dashboard/dashboardOffer/dashboard.offer';
import { DashboardClosePage } from '../pages/dashboard/dashboardClose/dashboard.close';
import { EditArtistProfilePage } from '../pages/profile/edit-profile/edit-artist-profile/edit.artist.profile';
import { ProfileOrganizerPage } from '../pages/profile/profile-organizer/profile.organizer';
import { ProfileOrganizerService } from '../services/profile/profile.organizer.service';
import { EditOrganizerProfilePage } from '../pages/profile/edit-profile/edit-organizer-profile/edit.organizer.profile';
import { AddEventPage } from '../pages/add/add-event/add.event';
import { AddSongPage } from '../pages/add/add-song/add.song';

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
    EditArtistProfilePage,
    ProfileOrganizerPage,
    EditOrganizerProfilePage,
    AddEventPage,
    AddSongPage
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
    EditArtistProfilePage,
    ProfileOrganizerPage,
    EditOrganizerProfilePage,
    AddEventPage,
    AddSongPage
  ],
  providers: [
    ProfileArtistService,
    NewsViewArtistService,
    ProfileOrganizerService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
