import { Injectable } from '@angular/core';
import { CreateProduct } from '../interfaces/create-product.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http : HttpClient) { }

  saveProduct(product: CreateProduct, adminId: string): Observable<any> {
    const data = {
      adminId,
      ...product
    }
    return this.http.post("http://localhost:3000/api/products/",data);
  }

  getAllProducts() {

  }
}
