import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList!: Category;

  constructor(private productsService: ProductsService) { 
    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data;
      console.log(this.categoryList)
    });
  }

  

  ngOnInit(): void {
    

  }

}
