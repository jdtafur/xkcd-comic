import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ComicService} from "./core/services/comic.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [ComicService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'xkcd-comic';

  constructor(private _comicService: ComicService) {
    this._comicService.getCurrent().subscribe((comic: any) => {
      console.log('test connection', comic);
    })
  }
}
