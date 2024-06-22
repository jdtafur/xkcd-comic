import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgTemplateOutlet} from "@angular/common";
import {Store} from "@ngxs/store";
import {LoadComic, RateComic, LoadComicByRandomNumber} from "../../core/states/comic.actions";
import {Observable} from "rxjs";
import {Comic} from "../../core/interfaces/comic.interface";
import {ComicState} from "../../core/states/comic.state";
import {ComicDetailComponent} from "../comic-detail/comic-detail.component";

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    AsyncPipe,
    ComicDetailComponent,
  ],
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.scss'
})
export class ComicComponent implements OnInit {
  currentComic$: Observable<Comic | null> = this.store.select(ComicState.getComic);

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.loadComic();
  }

  loadComic() {
    this.store.dispatch(new LoadComic());
  }

  getComicByRandomNumber(): void {
    this.store.dispatch(new LoadComicByRandomNumber());
  }

  rateComic(num: number, rating: number) {
    this.store.dispatch(new RateComic({num, rating}));
  }
}
