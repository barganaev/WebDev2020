import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { iCategory, iProduct } from './model';
import {categories, ICatergory} from 'src/app/category';
import {Observable, of} from 'rxjs';
import { products,IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  allCategories = categories;
  allProducts = products;

  getCategories() : Observable<ICatergory[]> {
    return of(this.allCategories);
  }
  getCategoryById(id: number): Observable<ICatergory> {
    return of(this.allCategories.find(category => category.id === id));
  }
  getProductsByCategoryId(id: number): Observable<IProduct[]> {
    return of (this.allProducts.filter(product => product.category_id === id));
  }
  gerProductByProductId(id: number): Observable<IProduct> {
    return of(this.allProducts.find(product => product.id === id));
  }
}
