import { NgModule } from '@angular/core';
import { routing } from './list.routing';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  providers: []
})
export class ListModule { }
