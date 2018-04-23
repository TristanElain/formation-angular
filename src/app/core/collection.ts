import {State} from '../shared/enums/state.enum';
import {Item} from './../shared/models/item';

export const COLLECTION: Item[] = [
  {id: 'a1', name: 'toto', reference: '1234', state: State.ALIVRER},
  {id: 'a2', name: 'titi', reference: '12345', state: State.ENCOURS},
  {id: 'a3', name: 'tata', reference: '123456', state: State.LIVRE},
];
