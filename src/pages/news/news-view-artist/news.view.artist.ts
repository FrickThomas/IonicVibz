import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { NewsViewArtistService } from "../../../services/news.view.artist.service";
import { Event } from "../../../models/Event";

@Component({
    selector: 'page-news-view-artist',
    templateUrl: './news.view.artist.html'
})

export class NewsViewArtistPage implements OnInit {
    
    event: Event;
    eventSubscription: Subscription;
    
    constructor(private newsViewArtistService: NewsViewArtistService) {

    }

    ngOnInit() {
        this.eventSubscription = this.newsViewArtistService.event$.subscribe(
            (event: Event) => {
                this.event = event;
            }
        );
        this.newsViewArtistService.emitEvent();
    }
}