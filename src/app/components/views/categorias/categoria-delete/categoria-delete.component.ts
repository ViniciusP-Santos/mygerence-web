import { Categoria } from "./../categoria.model";
import { CategoriasService } from "./../categorias.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class CategoriaDeleteComponent implements OnInit {
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private service: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  //Metodo inicializa junto com o componente
  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe(
      () => {
        this.router.navigate(["products"]);
        this.service.mensagem("Categoria deletada com sucesso!");
      },
      (err) => {
        this.service.mensagem(err.error.error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(["products"]);
  }
}
