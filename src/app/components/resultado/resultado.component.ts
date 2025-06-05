// src/app/components/resultado/resultado.component.ts
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Dieta, ReceitasService } from 'src/app/services/receitas/receitas.service';
import { RecomendacoesService } from 'src/app/services/recomendacoes/recomendacoes.service';
import { ReceitasComponent } from '../receitas/receitas.component';



@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnChanges {
  @Input() resultado: any;
  @Input() usuario!: { dieta: Dieta; objetivo: string; restricoes: string[] };
  @ViewChild(ReceitasComponent) receitasComponent!: ReceitasComponent;

  recomendacoes: any[] = [];
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

  callRecomendacoes(dados: any) {
    // Se dieta for null, substitui por string vazia ''
    const dietaValida: Dieta = this.usuario.dieta ?? null;
    this.recomendacoes = this.recomendacoesService.gerarRecomendacoes(
      dietaValida,
      this.usuario.objetivo,
      this.usuario.restricoes
    );

    if (this.receitasComponent) {
    this.receitasComponent.filtrarReceitas(this.recomendacoes);
  }
  }
}
