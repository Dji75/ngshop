import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { map, Observable } from 'rxjs';
import { Cart } from '../cart';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngshop-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor() { }
  private cartService = inject(CartService);
  public cart$: Observable<Cart> = this.cartService.getCart();
  public total$: Observable<number> = this.cart$.pipe(
    map(cart => cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0))
  );

  removeCart(id: number) {
    this.cartService.removeFromCart(id);
  }
}
