import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
    
  searchCategory: string = '';
  productList: Product[] = [];
  erro: any;

  constructor(private activatedRoute: ActivatedRoute, private productSService: ProductsService) { }

  ngOnInit(): void {
    //a Função params captura um determinado parametro de um objeto e manda outro objeto apenas com esse parametro
    this.activatedRoute.params.subscribe(data=>{
      //pegamos o valor do parametro "id" e passamos para searchCategory como valor
      this.searchCategory = data.id;
      console.log(data);
      console.log('id da categoria',this.searchCategory);

      this.productSService.searchCategoryProducts(this.searchCategory).
          subscribe((categoryData: Product[]) => {
            this.productList = categoryData;
            console.log('oq recebemos',categoryData);
            console.log('oq salvamos',this.productList);
          },
          (error: any) => {
            this.erro = error;
            console.error(error);
          });
    });

    
  }

}
