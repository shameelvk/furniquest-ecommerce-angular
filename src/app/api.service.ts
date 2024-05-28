import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getProducts(){
    const headers = new HttpHeaders({
      'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6'
    });
    return this.http.get("https://api.chec.io/v1/products?limit=26",{headers})
   
  }
  
  getCategory(){
    const headers = new HttpHeaders({
      'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6'
    });
    return this.http.get("https://api.chec.io/v1/categories",{headers})
   
  }

  addToCart(productId: string) {
    const headers = new HttpHeaders({
      'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6',
      'Content-Type': 'application/json'
    });
    const body = {
      id: productId,
      quantity: 1
    };
    return this.http.post(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/`, body, { headers });
  }



  getCartData() {
    const headers = new HttpHeaders({
      'X-Authorization':  'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6',
    });
    return this.http.get(`https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB`, { headers });
  }

  deleteProductFromCart(itemId: string) {
     const url = `https://api.chec.io/v1/carts/cart_kpnNwAO9Og5mXB/items/${itemId}`;
    const headers = new HttpHeaders({
      'X-Authorization':'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6',
      'Content-Type': 'application/json'
    });
    return this.http.delete(url, { headers });
  }


  updateCartItemQuantity(itemId: string, quantity: number): Observable<any> {
    const cartId = 'cart_kpnNwAO9Og5mXB';
    const url = `https://api.chec.io/v1/carts/${cartId}/items/${itemId}`;
    const headers = new HttpHeaders({
      'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
      'Content-Type': 'application/json'
    });
    const body = {
      quantity: quantity
    };
    return this.http.put(url, body, { headers: headers });
  }


  clearCart(): Observable<any> {
    const cartId = 'cart_kpnNwAO9Og5mXB';
    const url = `https://api.chec.io/v1/carts/${cartId}/items/`;
    const headers = new HttpHeaders({
      'X-Authorization': 'pk_57101018f996db1becda1d7cc34d0083a0472b64307a6', 
      'Content-Type': 'application/json'
    });
    return this.http.delete(url, { headers: headers });
  }
}
