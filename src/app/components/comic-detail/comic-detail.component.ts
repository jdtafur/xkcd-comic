import {Component, Input} from '@angular/core';
import {Comic} from "../../core/interfaces/comic.interface";
import {NgTemplateOutlet} from "@angular/common";
import {ComicTranscriptComponent} from "../comic-transcript/comic-transcript.component";

@Component({
  selector: 'app-comic-detail',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    ComicTranscriptComponent
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
}
