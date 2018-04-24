import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

import {State} from './../enums/state.enum';

@Directive({selector: '[appState]'})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;

  constructor() {}

  ngOnChanges() {
    this.nomClass = this.getClassFromState(this.appState);
  }

  removeAccents(state: string): string {
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  getClassFromState(state: string): string {
    return `state-${
        this.removeAccents(state).toLowerCase().replace(/\s/g, '')}`;
  }
}
