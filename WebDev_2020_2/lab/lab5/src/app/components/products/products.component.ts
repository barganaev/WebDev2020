import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { IProduct } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { ICatergory } from 'src/app/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private categoryService: CategoriesService,
    private route: ActivatedRoute) { }
  products: IProduct[];
  category: ICatergory;
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('cateogryId');
    this.getCategory(id);
    this.getProducts(id);
  }
  getProducts(id: number) {
    this.categoryService.getProductsByCategoryId(id).subscribe(products => this.products=products)
  }
  getCategory(id:number) {
    this.categoryService.getCategoryById(id).subscribe(c => this.category=c);
  }


}
