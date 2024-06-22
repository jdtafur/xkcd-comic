import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-comic-transcript',
  standalone: true,
  imports: [],
  templateUrl: './comic-transcript.component.html',
  styleUrl: './comic-transcript.component.scss'
})
export class ComicTranscriptComponent {
  @Input() transcript: string = '';

  getTranscript(transcript: string): string[] {
    console.log(transcript.split('\n\n'))
    return transcript.split('\n\n');
  }

  getSubTranscript(transcript: string): string[] {
    return transcript.split('\n');
  }
}
