import { Component, inject } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Observable } from 'rxjs';
import { Cart } from '../cart/cart';
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
  constructor() {
    this.cart$ = this.cartService.getCart();
  }
  private cartService = inject(CartService);
  cart$: Observable<Cart>

  getCartLength(cart: Cart | null): number {
    return cart && cart.items.length > 0
      ? cart.items.reduce((acc, item) => acc + item.quantity, 0)
      : 0;
   }
}
