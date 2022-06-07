import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = '';
  productDetails: Product = new Product;
  erro: any;
  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private formBuilder: FormBuilder) { 
    
    this.form = this.formBuilder.group(
      {
        name: [null],
        id:[null],
        categoryId:null,
        description: [null],
        rating: null,
        color: [null],
        isAvailable: null,
        price: null,
        reviews: null
      }
      );
  }

  ngOnInit(): void {
    this.getter();
    // console.log('dentro do On init',this.productDetails);
    
  }

  getter(){
    this.activatedRoute.params.subscribe((data)=>{
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).
      subscribe((productData)=>{
        this.productDetails = productData;
        //é preciso chamar "attForm" aqui pos o unico momento em que productDetails está preenchida com os valores do produto associado ao productId 
        this.attForm(); 

        console.log('oq recebememos', productData);
        console.log('oq guardamos', this.productDetails);

      },
      
      (error)=>{
        this.erro = error;
        console.log(error);
      });
    });
  }

  //metodo criado para adicionar nos campos do form os valores do produto associado ao productId. 
  attForm(){
    this.form = this.formBuilder.group(
      {
        name: this.productDetails.name,
        id: this.productDetails.id,
        categoryId: this.productDetails.categoryId,
        description: this.productDetails.description,
        rating: this.productDetails.rating,
        color: this.productDetails.color,
        isAvailable: this.productDetails.isAvailable,
        price: this.productDetails.price,
        reviews: this.productDetails.reviews
      }
      );
  }

  attProduct(form:FormGroup){
    
    console.log('valor do form',form.value);

    let updatedProduct:Product = {
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

    this.productsService.updateProduct(this.productId, updatedProduct).subscribe(
      (data)=>{
        console.log(data);
      },(error)=>{
        this.erro = error;
        console.log(error);
      }

      );
  }


}
