import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  form: FormGroup;
  product: Product = new Product;
  erro: any;
  

  constructor(private productsService: ProductsService, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group(
      {
        name: [null],
        id:[null],
        categoryId:null,
        description: [null],
        rating: '',
        color: [null],
        isAvailable: null,
        price: null,
        reviews: null
      }
      );

   }

  ngOnInit(): void {
  }

  addNewProduct(){

    console.log(this.form.value);

      let product:Product = {
      id:this.form.value.id,
      categoryId:this.form.value.categoryId,
      name: this.form.value.name,
      description: this.form.value.description,
      rating: this.form.value.rating,
      price: this.form.value.price,
      productImg: 'http://localhost:4200/assets/product-img.jpg',
      isAvailable: this.form.value.isAvailable,
      color: this.form.value.color,
      reviews: this.form.value.reviews
      
    };

    console.log(product);

    this.productsService.createProduct(product).
    subscribe((data)=>{
      console.log('oq recebemos',data);
    },(error)=>{
      this.erro = error;
      console.log(error);
    });
  }

}
