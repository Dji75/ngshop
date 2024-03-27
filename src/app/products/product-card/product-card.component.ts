import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { TruncatePipe } from '../../truncate.pipe';
import { CommonModule, DecimalPipe, getCurrencySymbol } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'ngshop-product-card',
  standalone: true,
  imports: [TruncatePipe, CommonModule, RouterLink, DecimalPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) { }
  currencySymbol(): string {
    return getCurrencySymbol('EUR','narrow');
  }

  buttonCartClicked() {
    this.cartService.addToCart(this.product);
  }

  getRatingClasses(rating: number, index: number) {
    return {
      styles_starIcon: rating >= index,
      styles_emptyStarIcon: rating < index
    }
  }
}
