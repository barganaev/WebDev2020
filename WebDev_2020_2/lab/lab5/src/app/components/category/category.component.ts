import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { formattedError } from '@angular/compiler';
import { iCategory } from 'src/app/services/model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  constructor(private sender: CategoriesService) { }
  
  categories: iCategory[] = [
    {id: 1, category: 'food', products:[
      {id:1, title: 'egg', description:'ASfas'},
      {id:2, title: 'bread', description:'ASfas'},
      {id:3, title: 'butter', description:'ASfas'},
      {id:4, title: 'sugar', description:'ASfas'},
      {id:5, title: 'salt', description:'ASfas'},
      {id:6, title: 'apple', description:'ASfas'},
      {id:7, title: 'bananas', description:'ASfas'},
      {id:8, title: 'lemon', description:'ASfas'},
      {id:9, title: 'tea', description:'ASfas'},
      {id:10, title: 'cookie', description:'ASfas'}    ]},

    {id: 2, category: 'cars', products:[
      {id:1, title: 'nexia', description:'ASfas'},
      {id:2, title: 'volvo', description:'ASfas'},
      {id:3, title: 'toyota', description:'ASfas'},
      {id:4, title: 'lexus', description:'ASfas'},
      {id:5, title: 'mazda', description:'ASfas'},
      {id:6, title: 'subaru', description:'ASfas'},
      {id:7, title: 'skoda', description:'ASfas'},
      {id:8, title: 'lamborghini', description:'ASfas'},
      {id:9, title: 'bugatti', description:'ASfas'},
      {id:10, title: 'ford', description:'ASfas'}    ]},

    {id: 3, category: 'electronics', products:[
      {id:1, title: 'asus', description:'ASfas'},
      {id:2, title: 'mac', description:'ASfas'},
      {id:3, title: 'acer', description:'ASfas'},
      {id:4, title: 'hp', description:'ASfas'},
      {id:5, title: 'iphone', description:'ASfas'},
      {id:6, title: 'samsung', description:'ASfas'},
      {id:7, title: 'huawei', description:'ASfas'},
      {id:8, title: 'meizu', description:'ASfas'},
      {id:9, title: 'lg', description:'ASfas'},
      {id:10, title: 'bosh', description:'ASfas'}    ]},

    {id: 4, category: 'movies', products: [
      {id:1, title: 'Lion', description:'ASfas'},
      {id:2, title: 'Harry Potter', description:'ASfas'},
      {id:3, title: 'Levsha', description:'ASfas'},
      {id:4, title: 'Harley Queen', description:'ASfas'},
      {id:5, title: '1917', description:'ASfas'},
      {id:6, title: 'King of Rings', description:'ASfas'},
      {id:7, title: 'Strelok', description:'ASfas'},
      {id:8, title: 'Kuxnia', description:'ASfas'},
      {id:9, title: 'Avengers', description:'ASfas'},
      {id:10, title: 'Barman', description:'ASfas'}
  
    ]}]
  


    // ['egg', 'bread','butter', 'sugar', 'salt', 'apple','bananas', 'lemon', 'tea','cookie']
    // ['nexia', 'volvo', 'toyota', 'lexus','mazda','subaru','skoda','lamborghini','bugatti','ford']
    // ['asus', 'mac', 'acer','hp','iphone', 'samsung', 'huawei', 'meizu','lg', 'bosh']
    // ['Lion','Harry Potter', 'Levsha','Harley Queen', '1917', 'King of Rings','Strelok','Kuxnia','Avengers','Batman']



  ngOnInit(): void {

  }

  sendId(category)
  {
    
    this.sender.getCategoryId(category)
  }
}
