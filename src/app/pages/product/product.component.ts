import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../units/card/card.component';
import { ProductnavigationComponent } from '../../units/productnavigation/productnavigation.component';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, ProductnavigationComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any = [];
  filteredProducts: any = [];

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: any) => {
      this.products = data.data;

      this.filterProducts();
    });


    this.route.queryParams.subscribe(params => {
      this.filterProducts();
    });
  }

  filterProducts(): void {
    const categoryId = this.route.snapshot.queryParams['cat'];
    const search = this.route.snapshot.queryParams['query'];
    if (categoryId) {
      this.filteredProducts = this.products.filter((p: any) => p.categories[0].id == categoryId);
    } else if (search) {
      this.filteredProducts = this.products.filter((p: any) => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    else {
      this.filteredProducts = this.products;
    }
  }
}