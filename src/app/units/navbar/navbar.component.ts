import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartcountService } from '../../cartcount.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router,private cartcount: CartcountService) {}

  cartItemCount: number = 0;

ngOnInit(): void {
  this.cartcount.cartItemCount$.subscribe(count => {
    this.cartItemCount = count;
  });
}

  onSearch(query: string): void {
    if (query.trim()) {
      this.router.navigate(['/products'], { queryParams: { query } });
    }
  }

}
