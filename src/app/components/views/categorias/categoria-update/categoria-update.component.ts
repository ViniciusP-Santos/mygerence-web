import { ActivatedRoute, Router } from "@angular/router";
import { CategoriasService } from "./../categorias.service";
import { Categoria } from "./../categoria.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };
  constructor(
    private services: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.services.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  //Atualizando uma categoria
  update(): void {
    this.services.update(this.categoria).subscribe(
      (resposta) => {
        this.router.navigate(["products"]);
        this.services.mensagem("Categoria atualizada com sucesso!");
      },
      (error) => {
        this.services.mensagem(
          "Verifique se todos os campos estão preenchidos corretamente!"
        );
      }
    );
  }

  cancel(): void {
    this.router.navigate(["products"]);
  }
}
