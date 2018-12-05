import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { NewsViewArtistService } from "../../../services/news/news.view.artist.service";
import { Event } from "../../../models/Event";

@Component({
    selector: 'page-news-view-artist',
    templateUrl: './news.view.artist.html'
})

export class NewsViewArtistPage implements OnInit {
    
    eventList: Event[];
    eventListSubscription: Subscription;
    
    constructor(private newsViewArtistService: NewsViewArtistService) {

    }

    ngOnInit() {
        this.eventListSubscription = this.newsViewArtistService.eventList$.subscribe(
            (event: Event[]) => {
                this.eventList = event;
            }
        );
        this.newsViewArtistService.emitEvent();
    }
}