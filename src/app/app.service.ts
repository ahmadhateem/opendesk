import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as actions from './store/actions';
import { State } from './store/reducers';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient,
    private store: Store<State>
  ) { }

  getItems() {

    this.http.get('http://5a12745f748faa001280a746.mockapi.io/v1/stores/item')
    .subscribe(res => {
      this.store.dispatch(new actions.SetItems(res));
    }, err => {
      console.log(err);
    });
  }

}
