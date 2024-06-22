import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgTemplateOutlet} from "@angular/common";
import {Store} from "@ngxs/store";
import {LoadComic, LoadComicByRandomNumber} from "../../core/states/comic.actions";
import {Observable} from "rxjs";
import {Comic} from "../../core/interfaces/comic.interface";
import {ComicState} from "../../core/states/comic.state";
import {ComicDetailComponent} from "../comic-detail/comic-detail.component";
import {ComicRateComponent} from "../comic-rate/comic-rate.component";

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    AsyncPipe,
    ComicDetailComponent,
    ComicRateComponent,
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
}
