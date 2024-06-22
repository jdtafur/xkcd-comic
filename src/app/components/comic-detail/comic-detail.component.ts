import {Component, Input} from '@angular/core';
import {Comic} from "../../core/interfaces/comic.interface";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-comic-detail',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './comic-detail.component.html',
  styleUrl: './comic-detail.component.scss'
})
export class ComicDetailComponent {
  @Input() comic!: Comic;

  get title(): string {
    return `${ this.comic.title } (${ this.comic.num })`;
  }

  get date(): string {
    const {day, month, year} = this.comic;
    return `${day}/${month}/${year}`;
  };

  getTranscript(transcript: string): string[] {
    return transcript.split('\n\n')
  }

  getSubTranscript(transcript: string): string[] {
    return transcript.split('\n')
  }
}
