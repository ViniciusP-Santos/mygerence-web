import { Categoria } from "./categoria.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CategoriasService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  //Listando todas as Categorias
  findAll(): Observable<Categoria[]> {
    //Fazendo requisição do tipo GET
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  //Buscar uma categoria pelo id
  findById(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.http.get<Categoria>(url);
  }

  //Criando uma nova categoria
  create(categoria: Categoria): Observable<Categoria> {
    //Fazendo requisição do tipo POST
    const url = `${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  //Deletando uma categoria
  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.http.delete<void>(url);
  }

  //Atualizando uma categoria
  update(categoria: Categoria): Observable<void> {
    const url = `${this.baseUrl}/categorias/${categoria.id}`;
    return this.http.put<void>(url, categoria);
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
