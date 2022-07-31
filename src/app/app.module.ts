import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/templete/footer/footer.component";
import { NavbarComponent } from "./components/templete/navbar/navbar.component";
import { CategoriaCreateComponent } from "./components/views/categorias/categoria-create/categoria-create.component";
import { CategoriaReadComponent } from "./components/views/categorias/categoria-read/categoria-read.component";
import { HomeComponent } from "./components/views/home/home.component";
import { CategoriaDeleteComponent } from "./components/views/categorias/categoria-delete/categoria-delete.component";
import { CategoriaUpdateComponent } from "./components/views/categorias/categoria-update/categoria-update.component";
import { ProdutoReadAllComponent } from "./components/views/produtos/produto-read-all/produto-read-all.component";
import { ProdutoCreateComponent } from "./components/views/produtos/produto-create/produto-create.component";
import { ProdutoUpdateComponent } from './components/views/produtos/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/views/produtos/produto-delete/produto-delete.component';
import { ProdutoReadComponent } from './components/views/produtos/produto-read/produto-read.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    ProdutoReadAllComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    ProdutoReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
