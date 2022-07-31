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

  findAllByCategoria(id_cat: String): Observable<Produto[]> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`;
    return this.http.get<Produto[]>(url);
  }

  findById(id: String): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${id}`;
    return this.http.get<Produto>(url);
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/produtos/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  create(produto: Produto, id_cat: String): Observable<Produto> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`;
    return this.http.post<Produto>(url, produto);
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
