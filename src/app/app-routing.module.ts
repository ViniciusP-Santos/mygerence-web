import { CategoriaCreateComponent } from "./components/views/categorias/categoria-create/categoria-create.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaReadComponent } from "./components/views/categorias/categoria-read/categoria-read.component";
import { HomeComponent } from "./components/views/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: CategoriaReadComponent },
  { path: "products/create", component: CategoriaCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
