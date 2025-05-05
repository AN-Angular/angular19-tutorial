import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-service-demo',
  imports: [],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css'
})
export class ServiceDemoComponent {

  public productList: any[] = [];

  constructor(private productService: ProductService) {
    // constructor logic here
  }

  ngOnInit() {
    this.productService.getProductList().subscribe((response: any) => {
      console.log(response);
      this.productList = response.products;
    });
  }

}
