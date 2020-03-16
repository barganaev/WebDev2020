import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { formattedError } from '@angular/compiler';
import { iCategory } from 'src/app/services/model';
import { ICatergory } from 'src/app/category';
//import { getEnabledCategories } from 'trace_events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute
  ) { }
  public categories: ICatergory[];


  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }
}
