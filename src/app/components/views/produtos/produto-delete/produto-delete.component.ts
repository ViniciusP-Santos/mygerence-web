import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "../produto.service";
import { Produto } from "../produto.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-produto-delete",
  templateUrl: "./produto-delete.component.html",
  styleUrls: ["./produto-delete.component.css"],
})
export class ProdutoDeleteComponent implements OnInit {
  id_cat: String = "";
  produto: Produto = {
    id: "",
    nome: "",
    marca: "",
    conteudo: "",
  };

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.produto.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  update(): void {
    this.service.update(this.produto).subscribe(
      (resposta) => {
        this.router.navigate([`/products/${this.id_cat}/produtos`]);
        this.service.mensagem("Produto atualizado com sucesso!");
      },
      (err) => {
        this.router.navigate([`/products/${this.id_cat}/produtos`]);
        this.service.mensagem(
          "Falha ao atualizar Produto! Tente novamente mais tarde."
        );
      }
    );
  }

  delete(): void {
    this.service.delete(this.produto.id!).subscribe(
      (resposta) => {
        this.router.navigate([`/products/${this.id_cat}/produtos`]);
        this.service.mensagem("Produto excluído com sucesso!");
      },
      (err) => {
        this.router.navigate([`/products/${this.id_cat}/produtos`]);
        this.service.mensagem(
          "Falha ao excluir Produto! Tente novamente mais tarde."
        );
      }
    );
  }

  cancel(): void {
    this.router.navigate([`/products/${this.id_cat}/produtos`]);
  }

  findById(): void {
    this.service.findById(this.produto.id!).subscribe(
      (resposta) => {
        this.produto = resposta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
