import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
