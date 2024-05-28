import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CartcountService } from '../../cartcount.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartData: any; 
  cartItemCount: any;

  constructor(private api: ApiService, private cdr: ChangeDetectorRef,private cartcountServices: CartcountService) { }

  ngOnInit(): void {
    this.getCartData(); 
  }

  getCartData(): void {
    this.api.getCartData().subscribe((data: any) => {
      this.cartData = data; 
      this.cartItemCount = this.calculateCartItemCount(data);
      this.cartcountServices.updateCartItemCount(this.cartItemCount);
      this.cdr.detectChanges();
    }, error => {
      console.error('Error fetching cart data:', error);
    });
  }


  calculateCartItemCount(data: any): number {
    return data ? data.total_unique_items : 0; 
  }

  decreaseCartItemQuantity(itemId: string, quantity: number): void {
    this.api.updateCartItemQuantity(itemId, quantity).subscribe(
      (response: any) => {
        console.log('Cart item quantity updated successfully:', response);
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
