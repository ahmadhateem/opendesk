import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public total: number;

  constructor(
    private appService: AppService,
    private store: Store<AppState>
  ) {
    this.appService.getItems();
    this.store.select('AppState','Total').subscribe(total => {
      this.total = total;
    });
  }
}
