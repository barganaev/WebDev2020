import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { iCategory, iProduct } from 'src/app/services/model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private data: CategoriesService) { }
  category: iCategory;
  product: any;
  ngOnInit(): void {
    this.data.currentCategory.subscribe(id => 
      this.category = id
      )
  
  }



  senddetail(product){
    
    this.data.getProduct(product)
  }


}
