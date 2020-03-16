import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { IProduct } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private categoryService: CategoriesService,private route: ActivatedRoute) { }
  product: IProduct
  ngOnInit(): void {
    const product_id = +this.route.snapshot.paramMap.get('productID');
    this.getProductById(product_id);
    
  }
  getProductById(id: number) {
    this.categoryService.gerProductByProductId(id).subscribe(p => this.product=p)
  }

}
