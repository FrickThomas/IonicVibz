import { Component } from '@angular/core';
import { NewsViewArtistPage } from '../news/news-view-artist/news.view.artist';
import { DashboardPage } from '../dashboard/dashboard';
import { ProfileArtistPage } from '../profile/profile-artist/profile.artist';
import { ProfileOrganizerPage } from '../profile/profile-organizer/profile.organizer';


@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    newsPage = NewsViewArtistPage;
    dashboardPage = DashboardPage;
    profilePage = ProfileOrganizerPage;
}