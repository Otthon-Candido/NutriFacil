// src/app/components/resultado/resultado.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dieta, ReceitasService } from '../receita.service';
import { RecomendacoesService } from '../recomendacoes.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnChanges {

  @Input() resultado: any;
  @Input() usuario!: { dieta: Dieta; objetivo: string; restricoes: string[] };

  recomendacoes: any[] = [];
  receitas: any = [];
  openedIndexes: number[] = [];

  constructor(
    private recomendacoesService: RecomendacoesService,
    private receitasService: ReceitasService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // Se dieta for null, substitui por string vazia ''
    const dietaValida: Dieta = this.usuario.dieta ?? null;

    this.recomendacoes = this.recomendacoesService.gerarRecomendacoes(
      dietaValida,
      this.usuario.objetivo,
      this.usuario.restricoes
    );

    this.receitas = this.receitasService.getReceitas(dietaValida);

    console.log(this.resultado);
    console.log(this.usuario);
  }

  toggleAccordion(index: number) {
    const pos = this.openedIndexes.indexOf(index);
    if (pos > -1) {
      this.openedIndexes.splice(pos, 1);
    } else {
      this.openedIndexes.push(index);
    }
  }

  isOpen(index: number): boolean {
    return this.openedIndexes.includes(index);
  }
}
