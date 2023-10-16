// product/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://your-backend-server/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.apiUrl);
  }
}
