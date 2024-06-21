import {Component} from '@angular/core';
import {ComicService} from "../../core/services/comic.service";
import {HttpClientModule} from "@angular/common/http";
import {JsonPipe, NgTemplateOutlet} from "@angular/common";
import {Comic} from "../../core/interfaces/comic.interface";

const RANGE = {
  min: 1,
  max: 2948,
}


@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, NgTemplateOutlet],
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
    });
  }

  getComicByRandomNumber(): void {
    const randomNumberComic: number = Math.floor(Math.random() * (RANGE.max - RANGE.min + 1)) + RANGE.min;
    this._comicService.getByNumber(randomNumberComic).subscribe((comic: Comic) => {
      this.comicCurrent = comic;
    });
  }

  getTranscript(transcript: string): string[] {
    return transcript.split('\n\n')
  }

  getSubTranscript(transcript: string): string[] {
    return transcript.split('\n')
  }
}
