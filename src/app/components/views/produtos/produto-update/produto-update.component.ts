import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, Validators } from "@angular/forms";
import { ProdutoService } from "../produto.service";
import { Produto } from "../produto.model";

@Component({
  selector: "app-produto-update",
  templateUrl: "./produto-update.component.html",
  styleUrls: ["./produto-update.component.css"],
})
export class ProdutoUpdateComponent implements OnInit {
  id_cat: String = "";
  produto: Produto = {
    id: "",
    nome: "",
    marca: "",
    conteudo: "",
  };
  nome = new FormControl("", [Validators.minLength(3)]);
  marca = new FormControl("", [Validators.minLength(2)]);
  conteudo = new FormControl("", [Validators.minLength(5)]);

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

  getMessage() {
    if (this.nome.invalid) {
      return "O campo NOME deve conter entre 3 e 100 carateres";
    }
    if (this.marca.invalid) {
      return "O campo MARCA deve conter entre 2 e 100 carateres";
    }

    if (this.conteudo.invalid) {
      return "O campo CONTEUDO deve conter entre 5 e 200 carateres";
    }
    return false;
  }
}
