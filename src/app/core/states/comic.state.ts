import { State, Action, StateContext, Selector } from '@ngxs/store';
import {Comic, ComicStateModel} from "../interfaces/comic.interface";
import {ComicService} from "../services/comic.service";
import {tap} from "rxjs";
import {Injectable} from "@angular/core";
import {RANGE_COMIC} from "../constant/comic.const";
import {LoadComic, LoadComicByRandomNumber, RateComic, SetComic} from "./comic.actions";

const defaultState: ComicStateModel = {
  comic: null,
  ratings: {}
};

@Injectable()
@State<ComicStateModel>({
  name: 'comic',
  defaults: defaultState
})
export class ComicState {

  constructor(private comicService: ComicService) {}

  @Selector()
  static getComic(state: ComicStateModel): Comic | null {
    return state.comic;
  }

  @Selector()
  static getRatings(state: ComicStateModel): { [comicId: number]: number } {
    return state.ratings;
  }

  @Action(LoadComic)
  loadComic(ctx: StateContext<ComicStateModel>) {
    return this.comicService.getCurrent().pipe(
      tap((comic: Comic) => {
        ctx.dispatch(new SetComic(comic));
      })
    );
  }

  @Action(LoadComicByRandomNumber)
  loadComicByRandomNumber(ctx: StateContext<ComicStateModel>) {
    const randomNumberComic: number = Math.floor(Math.random() * (RANGE_COMIC.max - RANGE_COMIC.min + 1)) + RANGE_COMIC.min;
    return this.comicService.getByNumber(randomNumberComic).pipe(
      tap((comic: Comic) => {
        ctx.dispatch(new SetComic(comic));
      })
    );
  }

  @Action(SetComic)
  setCurrentComic(ctx: StateContext<ComicStateModel>, action: SetComic) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      comic: action.payload
    });
  }

  @Action(RateComic)
  rateComic(ctx: StateContext<ComicStateModel>, action: RateComic) {
    const state = ctx.getState();
    ctx.patchState({
      ratings: {
        ...state.ratings,
        [action.payload.num]: action.payload.rating
      }
    });
  }
}
