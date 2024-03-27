import { Component } from '@angular/core';
import { CartService } from '../products/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '../products/cart';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngshop-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  cart$: Observable<Cart>
  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.getCart();
   }

   getCartLength(cart: Cart | null): number {
    return cart && cart.items.length > 0
      ? cart.items.reduce((acc, item) => acc + item.quantity, 0)
      : 0;
   }
}
