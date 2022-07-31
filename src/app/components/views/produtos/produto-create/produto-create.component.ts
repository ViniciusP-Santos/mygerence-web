import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ProdutoService } from "../produto.service";
import { Produto } from "../produto.model";

@Component({
  selector: "app-produto-create",
  templateUrl: "./produto-create.component.html",
  styleUrls: ["./produto-create.component.css"],
})
export class ProdutoCreateComponent implements OnInit {
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
  }

  create(): void {
    this.service.create(this.produto, this.id_cat).subscribe(
      (resposta) => {
        this.router.navigate([`/products/${this.id_cat}/produtos`]),
          this.service.mensagem("Produto criado com sucesso!");
      },
      (err) => {
        this.router.navigate([`/products/${this.id_cat}/produtos`]),
          this.service.mensagem("Error ao criar novo livro!");
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
