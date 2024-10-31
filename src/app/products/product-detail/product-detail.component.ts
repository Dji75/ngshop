import { Component, inject } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'ngshop-product-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productService = inject(ProductService)
  private route = inject(ActivatedRoute)
  product!: Product | null;

  constructor() {
    const id = this.route.snapshot.params['id'] ?? 0;
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }
}
