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

  constructor(private http: HttpClient) {}

  findAllByCategoria(id_cat: String): Observable<Produto[]> {
    const url = `${this.baseUrl}/produtos?categoria=${id_cat}`;
    return this.http.get<Produto[]>(url);
  }
}
