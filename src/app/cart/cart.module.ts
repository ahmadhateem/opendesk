import { NgModule } from '@angular/core';
import { routing } from './cart.routing';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    routing,
    CommonModule
  ],
  providers: [],
})
export class CartModule { }
