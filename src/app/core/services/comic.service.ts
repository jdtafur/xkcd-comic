import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private urlApi = environment.baseUrl;
  private complementUrl = environment.complement;

  constructor(private _httpClient: HttpClient) {
  }

  getCurrent(): Observable<any> {
    return this._httpClient.get<any>(`${this.urlApi}/${this.complementUrl}`);
  }

  getByNumber(comicNumber: number): Observable<any> {
    return this._httpClient.get<any>(`${this.urlApi}/${comicNumber}/${this.complementUrl}`);
  }
}
