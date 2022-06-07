import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId: any;
  productDetails: Product = new Product;
  erro: any;

  constructor(private productsService: ProductsService ,private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=> {
      this.productId = data.id;
      console.log(this.productId)
    });
    
    this.getter();
  }

  getter() {
    this.productsService.viewProduct(this.productId).
    subscribe((productData) => {
      this.productDetails = productData;
       console.log('oq recebemos',productData);
       console.log('oq salvamos',this.productDetails);
    },
    (error: any) => {
      this.erro = error;
      console.error(error);
    });
  }

}
