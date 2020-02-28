import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { iProduct } from 'src/app/services/model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private data: CategoriesService) { }
  product: iProduct
  ngOnInit(): void {
    this.data.currentProduct.subscribe(id => this.product = id)    
  }


}
