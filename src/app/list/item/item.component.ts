import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../store/reducers';
import * as actions from '../../store/actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;
  value: number;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    console.log(this.item);
    if (this.item.counter > 1) {
      this.value = this.item.counter;
    } else {
      this.value = 0;
    }
  }

  increment() {
    console.log(this.value);
    this.value += 1;
    this.store.dispatch(new actions.Increment({id: this.item.id, counter: this.value}));
  }

  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.store.dispatch(new actions.Decrement({id: this.item.id, counter: this.value}));
    }
  }
}
