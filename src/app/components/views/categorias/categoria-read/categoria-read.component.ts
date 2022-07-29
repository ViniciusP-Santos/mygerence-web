import { Categoria } from "./../categoria.model";
import { CategoriasService } from "./../categorias.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-read",
  templateUrl: "./categoria-read.component.html",
  styleUrls: ["./categoria-read.component.css"],
})
export class CategoriaReadComponent implements OnInit {
  categorias: Categoria[] = [];

  displayedColumns: string[] = ["id", "nome", "descricao", "produtos", "acoes"];

  constructor(private service: CategoriasService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.categorias = resposta;
    });
  }
}
