import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartData: any; 

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCartData(); 
  }

  getCartData(): void {
    this.api.getCartData().subscribe((data: any) => {
      this.cartData = data; 
      this.cdr.detectChanges();
    }, error => {
      console.error('Error fetching cart data:', error);
    });
  }

  decreaseCartItemQuantity(itemId: string, quantity: number): void {
    this.api.updateCartItemQuantity(itemId, quantity).subscribe(
      (response: any) => {
        console.log('Cart item quantity updated successfully:', response);
        // Optionally, update cart data or trigger a refresh of the cart
        this.getCartData();
      },
      (error: any) => {
        console.error('Error updating cart item quantity:', error);
      }
    );
  }

  removeItem(itemId: string): void {
    this.api.deleteProductFromCart(itemId).subscribe(
      (response: any) => {
        console.log('Product removed from cart:', response);
        // Optionally, update cart data or trigger a refresh of the cart
        this.getCartData();
      },
      (error: any) => {
        console.error('Error removing product from cart:', error);
      }
    );
  }
  clearCart(): void {
    this.api.clearCart().subscribe(
      (response: any) => {
        this.getCartData();
      this.cdr.detectChanges();
        
      },
      (error: any) => {
        console.error('Error clearing cart:', error);
      }
    );
  }
}
