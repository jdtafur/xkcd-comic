import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comic} from "../interfaces/comic.interface";

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private urlApi = environment.baseUrl;
  private complementUrl = environment.complement;

  constructor(private _httpClient: HttpClient) {
  }

  getCurrent(): Observable<Comic> {
    return this._httpClient.get<Comic>(`${this.urlApi}/${this.complementUrl}`);
  }

  getByNumber(comicNumber: number): Observable<Comic> {
    return this._httpClient.get<Comic>(`${this.urlApi}/${comicNumber}/${this.complementUrl}`);
  }
}
