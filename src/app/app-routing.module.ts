import { ProdutoUpdateComponent } from "./components/views/produtos/produto-update/produto-update.component";
import { ProdutoCreateComponent } from "./components/views/produtos/produto-create/produto-create.component";
import { CategoriaUpdateComponent } from "./components/views/categorias/categoria-update/categoria-update.component";
import { CategoriaDeleteComponent } from "./components/views/categorias/categoria-delete/categoria-delete.component";
import { CategoriaCreateComponent } from "./components/views/categorias/categoria-create/categoria-create.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaReadComponent } from "./components/views/categorias/categoria-read/categoria-read.component";
import { HomeComponent } from "./components/views/home/home.component";
import { ProdutoReadAllComponent } from "./components/views/produtos/produto-read-all/produto-read-all.component";
import { ProdutoDeleteComponent } from "./components/views/produtos/produto-delete/produto-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: CategoriaReadComponent,
  },
  {
    path: "products/create",
    component: CategoriaCreateComponent,
  },
  {
    path: "products/delete/:id",
    component: CategoriaDeleteComponent,
  },
  {
    path: "products/update/:id",
    component: CategoriaUpdateComponent,
  },
  {
    path: "products/:id_cat/produtos",
    component: ProdutoReadAllComponent,
  },
  {
    path: "products/:id_cat/produtos/create",
    component: ProdutoCreateComponent,
  },
  {
    path: "products/:id_cat/produtos/:id/update",
    component: ProdutoUpdateComponent,
  },
  {
    path: "products/:id_cat/produtos/:id/delete",
    component: ProdutoDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
