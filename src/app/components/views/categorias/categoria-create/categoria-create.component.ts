import { Categoria } from "./../categoria.model";
import { CategoriasService } from "./../categorias.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-categoria-create",
  templateUrl: "./categoria-create.component.html",
  styleUrls: ["./categoria-create.component.css"],
})
export class CategoriaCreateComponent implements OnInit {
  categoria: Categoria = {
    nome: "",
    descricao: "",
  };
  constructor(private service: CategoriasService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    this.service.create(this.categoria).subscribe(
      (resposta) => {
        //Voltar para tela de categorias e mostrar mensagem de sucesso
        this.router.navigate(["products"]);
        //Imprimindo a resposta do servidor
        this.service.mensagem(
          `Categoria ${this.categoria.nome} criada com sucesso!`
        );
      },
      (err) => {
        for (let i = 0; i < err.error.erros.length; i++) {
          this.service.mensagem(err.error.erros[i].message);
        }
      }
    );
  }

  cancel(): void {
    this.router.navigate(["products"]);
  }
}
