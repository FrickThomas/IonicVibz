import { Component, ViewChild } from "@angular/core";
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicPage } from "ionic-angular";
import { DashboardRequestPage } from "./dashboardRequest/dashboard.request";
import { DashboardOfferPage } from "./dashboardOffer/dashboard.offer";
import { DashboardClosePage } from "./dashboardClose/dashboard.close";

@IonicPage()
@Component({
    selector: 'page-dashboard',
    templateUrl: './dashboard.html'
})

export class DashboardPage {
    
    pages = [
        { pageName: DashboardRequestPage, title: 'Request', id: 'requestTab'},
        { pageName: DashboardOfferPage, title: 'Offer', id: 'offerTab'},
        { pageName: DashboardClosePage, title: 'Close', id: 'closeTab'}
    ];

    selectedTab = 0;

    @ViewChild(SuperTabsModule) superTabs: SuperTabsModule;

    constructor() {

    }

    onTabSelect(ev: any){
        this.selectedTab = ev.index;
    }
}