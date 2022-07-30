import { CategoriaUpdateComponent } from "./components/views/categorias/categoria-update/categoria-update.component";
import { CategoriaDeleteComponent } from "./components/views/categorias/categoria-delete/categoria-delete.component";
import { CategoriaCreateComponent } from "./components/views/categorias/categoria-create/categoria-create.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaReadComponent } from "./components/views/categorias/categoria-read/categoria-read.component";
import { HomeComponent } from "./components/views/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: CategoriaReadComponent },
  { path: "products/create", component: CategoriaCreateComponent },
  { path: "products/delete/:id", component: CategoriaDeleteComponent },
  { path: "products/update/:id", component: CategoriaUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
