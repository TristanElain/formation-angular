import {Injectable} from '@angular/core';

import {Item} from './../../shared/models/item';
import {COLLECTION} from './../collection';

@Injectable()
export class CollectionService {
  private _collection: Item[];

  constructor() {
    this.collection = COLLECTION;
  }

  get collection(): Item[] {
    return this._collection;
  }

  set collection(col: Item[]) {
    this._collection = col;
  }

  getItem = (id: string) => {};

  updateItem = (item: Item) => {};

  deleteItem = (item: Item) => {};
}
