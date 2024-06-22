import {Comic} from "../interfaces/comic.interface";

export class LoadComic {
  static readonly type = '[Comic] Load';
}

export class LoadComicByRandomNumber {
  static readonly type = '[Comic] Load Random';
}

export class SetComic {
  static readonly type = '[Comic] Set Current';
  constructor(public payload: Comic) {}
}

export class RateComic {
  static readonly type = '[Comic] Rate';
  constructor(public payload: { num: number; rating: number }) {}
}
