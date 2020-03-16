import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailComponent } from './components/detail/detail.component';


  
const routes: Routes = [
  { path: '', redirectTo: "/categories" , pathMatch: "full"},
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:cateogryId/products', component: ProductsComponent },
  { path: 'categories/:cateogryId/products/:productID', component: DetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
