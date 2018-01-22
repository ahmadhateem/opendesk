import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SET_ITEMS = 'SET_ITEMS';

export class Increment implements Action {
    readonly type = INCREMENT;
    constructor(public payload: Payload) { }
}

export class Decrement implements Action {
    readonly type = DECREMENT;
    constructor(public payload: Payload) { }
}

export class SetItems implements Action {
    readonly type = SET_ITEMS;
    constructor(public payload: any) {}
}

export class Reset implements Action {
    readonly type = RESET;
    constructor() {}
}


export type Actions = Increment | Decrement | SetItems | Reset ;



export interface Payload {
    id: string;
    counter: number;
}
