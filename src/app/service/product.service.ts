import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {

  }

  getProductList() {
    return this.http.get(this.url);
  }

  // for using datatype with interface
  // getProductList(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.url);  
  // }
}
