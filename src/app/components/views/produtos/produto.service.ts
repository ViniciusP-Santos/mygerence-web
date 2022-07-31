import { MatSnackBar } from "@angular/material/snack-bar";
import { Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Produto } from "./produto.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  //Visualizando todos os livros por categoria
  findAllByCategoria(id_cat: String): Observable<Produto[]> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`;
    return this.http.get<Produto[]>(url);
  }

  //Visualizando um livro especifico por id
  findById(id: String): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${id}`;
    return this.http.get<Produto>(url);
  }

  //Cadastrando um livro
  create(produto: Produto, id_cat: String): Observable<Produto> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`;
    return this.http.post<Produto>(url, produto);
  }

  //Atualizando um livro especifico por id
  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/produtos/${id}`;
    return this.http.delete<void>(url);
  }

  //Validando se a resposta é sucesso ou um error!
  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
