import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  
  productList: Product[] = [];
  erro: any;

  constructor(private productsService: ProductsService) {
      this.getter();
   }

  ngOnInit(): void {
  }

  getter() {
    this.productsService.getAllProducts().
    subscribe((data: Product[]) => {
      this.productList = data;
      console.log('oq recebemos',data);
      console.log('oq salvamos',this.productList);
    },
    (error: any) => {
      this.erro = error;
      console.error(error);
    })
  }
}
