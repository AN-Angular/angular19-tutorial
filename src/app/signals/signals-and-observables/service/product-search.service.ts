import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient) {}

  // Simulated API
  search(query: string, category: string): Observable<Product[]> {
    const allProducts: Product[] = [
      { name: 'iPhone 15', category: 'electronics' },
      { name: 'Angular Book', category: 'books' },
      { name: 'Samsung TV', category: 'electronics' },
    ];

    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (!category || p.category === category)
    );

    return of(filtered).pipe(delay(800)); // simulate latency
  }
}
