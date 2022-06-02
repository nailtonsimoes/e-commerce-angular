import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ProductsService } from 'src/app/products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //lista de objeto do tipo category que recebe o data do service e exibe no html
  categoryList: Category[] = []; 
  erro: any;

  constructor(private productsService: ProductsService) { 
    
    this.getter();
    
  }
  //metodo que recebe o dado do service e inicializa no construtor.
  getter() {
    this.productsService.getCategories().
    subscribe((data: Category[]) => {
      this.categoryList = data;
    },
    (error: any) => {
      this.erro = error;
      console.error(error);
    })
  }

  ngOnInit(): void {
    

  }

}
