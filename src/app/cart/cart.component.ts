import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { State } from '../store/reducers';
import * as actions from '../store/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items: [{}];
  public message: boolean;

  constructor(
    private store: Store<State>,
    private router: Router
  ) { }

  ngOnInit() {
     this.store.select('AppState','Items').subscribe(items => {
       console.log('cart');
      this.items = items.filter(x => x.counter > 0);
       if (this.items.length === 0) {
        this.router.navigate(['']);
       }
     });
  }

  public checkout() {
    this.store.dispatch(new actions.Reset());
    this.message = true;
  }

}
