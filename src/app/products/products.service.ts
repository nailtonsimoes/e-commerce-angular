import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';
import { environment } from 'src/environments/environment'; 


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    api = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  
  getAllProducts(): Observable<Product[]>{
    const productUrl = 'http://localhost:3000/products';
    
    return this.httpClient.get<Product[]>(productUrl); //return an observable
  }

  getCategories(): Observable<Category[]> {

    return this.httpClient.get<Category[]>('http://localhost:3000/categories'); //return an observable

  }

  createProduct (productBody: Product): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    
   return this.httpClient.post<Product>(productUrl, productBody); //return an observable

  }

  viewProduct (productId: string): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    
   return this.httpClient.get<Product>(productUrl); //return an observable

  }

  updateProduct (productId: string, productBody: Product): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    
   return this.httpClient.put<Product>(productUrl, productBody); //return an observable

  }

  deleteProduct (productId: string): Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;
    
   return this.httpClient.delete<Product>(productUrl); //return an observable

  }

  searchCategoryProducts (categoryId:string): Observable<Product[]>{
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
   return this.httpClient.get<Product[]>(productUrl); //return an observable

  }

  searchDateProducts (dateParam: Date): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    
   return this.httpClient.get<Product>(productUrl); //return an observable

  }
  
}
