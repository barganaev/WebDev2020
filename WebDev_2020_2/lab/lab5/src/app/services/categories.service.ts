import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { iCategory, iProduct } from './model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  private category = new BehaviorSubject<iCategory>({id:1, category:"No category(reselect please)",products:[{id:0,title:'asd',
  description:'asd'}]});

  currentCategory = this.category.asObservable();


  private product = new BehaviorSubject<iProduct>({id:1, title:"No product(reselect please)",description: "asd"});
  
  currentProduct = this.product.asObservable();

    

  getCategoryId(category: iCategory) {
    this.category.next(category)
  }
  getProduct(product: iProduct){
    this.product.next(product)
  }



}
