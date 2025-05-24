import { Component, inject } from '@angular/core';
import { ProductService } from '../service/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

interface ProductResponse {
  limit: number;
  products: any;
  skip: number;
  total: number;
}

@Component({
  selector: 'app-service-demo',
  imports: [],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css'
})
export class ServiceDemoComponent {

  // public productList: any[] = [];

  // constructor(private productService: ProductService) {
  //   // constructor logic here
  // }

  // ngOnInit() {
  //   this.productService.getProductList().subscribe((response: any) => {
  //     console.log(response);
  //     this.productList = response.products;
  //   });
  // }

  // !! above was a Imperative way (traditional) below is a Declarative way(Signal interop)  

  private productService = inject(ProductService);

  // Interop: convert observable to signal
  productList = toSignal(
    this.productService.getProductList().pipe(
      map(response => response.products) // response is already an array
    ),
    { initialValue: [] }
  );
}
