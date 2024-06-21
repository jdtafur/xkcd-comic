import { Component } from '@angular/core';
import {ComicService} from "../../core/services/comic.service";
import {HttpClientModule} from "@angular/common/http";
import {JsonPipe} from "@angular/common";
import {Comic} from "../../core/interfaces/comic.interface";

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [HttpClientModule, JsonPipe],
  providers: [ComicService],
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.scss'
})
export class ComicComponent {
  comicCurrent!: Comic;

  get date(): string {
    return `${this.comicCurrent.day}/${this.comicCurrent.month}/${this.comicCurrent.year}`;
  };

  constructor(private _comicService: ComicService) {
    this._comicService.getCurrent().subscribe((comic: Comic) => {
      this.comicCurrent = comic;
    })
  }
}
