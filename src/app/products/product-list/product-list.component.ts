import { Component, inject } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Observable, combineLatest, map } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'ngshop-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  public products$: Observable<Product[]> = this.productService.getProducts();
  params = this.route.params;
  filteredProducts$ = combineLatest([this.products$, this.params]).pipe(
    map(([products, params]) => {
      const category = params['category'] ?? '';
      return category !== ''
      ? products.filter(p => p.category === category)
      : products;
    })
  )
}
