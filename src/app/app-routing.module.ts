import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'view', component: ViewProductsComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'update', component: UpdateProductComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
