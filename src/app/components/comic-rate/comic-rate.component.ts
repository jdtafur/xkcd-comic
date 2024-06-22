import {Component, OnInit} from '@angular/core';
import {ToggleModule} from "../../core/directives/toggle/toggle.module";
import {Observable} from "rxjs";
import {ComicState} from "../../core/states/comic.state";
import {Store} from "@ngxs/store";
import {RateComic} from "../../core/states/comic.actions";

@Component({
  selector: 'app-comic-rate',
  standalone: true,
  imports: [
    ToggleModule
  ],
  templateUrl: './comic-rate.component.html',
  styleUrl: './comic-rate.component.scss'
})
export class ComicRateComponent implements OnInit {
  currentRate$: Observable<number> = this.store.select(ComicState.getCurrentRating);
  currentRate: number = 0;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.currentRate$.subscribe((rate) => {
      this.currentRate = rate;
    });
  }

  rateComic(rating: number) {
    this.store.dispatch(new RateComic(rating));
  }
}
