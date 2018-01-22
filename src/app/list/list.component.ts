import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items: [{}];
  constructor( private store: Store<State>) { }

  ngOnInit() {
    this.store.select('AppState','Items').subscribe(items => {
     this.items = items;
    });
 }

}
