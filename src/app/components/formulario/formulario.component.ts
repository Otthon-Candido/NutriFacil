import { Component, ViewChild } from '@angular/core';
import { ResultadoComponent } from '../resultado/resultado.component';

type Sexo = 'masculino' | 'feminino';
type Dieta = 'mediterranea' | 'lowcarb' | 'cetogenica' | 'vegetariana' | null;
type Objetivo = 'manter' | 'emagrecimento' | 'hipertrofia';

interface Usuario {
  peso: number | null;
  altura: number | null;
  idade: number | null;
  sexo: Sexo | '';
  dieta: Dieta | null;
  objetivo: Objetivo | '';
  restricoes: string[];
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  @ViewChild(ResultadoComponent) resultadoComponent!: ResultadoComponent;
  usuario: Usuario = {
    peso: null,
    altura: null,
    idade: null,
    sexo: '',
    dieta: null,
    objetivo: '',
    restricoes: [],
  };
  restricoesSelecionadas: string[] = [];

  resultado: any = null;
  restricoesOptions = [
    { label: 'Lactose', value: 'lactose' },
    { label: 'Glúten', value: 'gluten' },
    { label: 'Proteína do leite', value: 'proteina_do_leite' },
    { label: 'Ovo', value: 'ovo' },
    { label: 'Frutos do mar', value: 'frutos_do_mar' },
  ];

  atualizarRestricoes(event: any, valor: string) {
    if (event.target.checked) {
      // Adiciona o valor ao array se não estiver presente
      if (!this.restricoesSelecionadas.includes(valor)) {
        this.restricoesSelecionadas.push(valor);
      }
    } else {
      // Remove o valor do array se estiver presente
      this.restricoesSelecionadas = this.restricoesSelecionadas.filter(
        (item) => item !== valor
      );
    }
  }

  calcular() {
    this.usuario.restricoes = this.restricoesSelecionadas;

    const { peso, altura, idade, sexo, dieta, objetivo } = this.usuario;

    if (!peso || !altura || !idade || !sexo || !dieta || !objetivo) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
    if (this.resultadoComponent) {
      this.resultadoComponent.callRecomendacoes(this.resultado);
    }

    // Cálculo TMB (Taxa Metabólica Basal)
    let tmb = 0;
    if (sexo === 'masculino') {
      tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
    } else {
      tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
    }

    // Cálculo IMC
    const imc = peso / (altura / 100) ** 2;

    let classificacaoIMC = '';
    if (imc < 18.5) classificacaoIMC = 'Abaixo do peso';
    else if (imc < 25) classificacaoIMC = 'Peso normal';
    else if (imc < 30) classificacaoIMC = 'Sobrepeso';
    else classificacaoIMC = 'Obesidade';

    // Água diária recomendada (em ml)
    const agua = peso * 35;

    // Atualiza resultado com dados básicos (sem recomendações)
    this.resultado = {
      tmb: Math.round(tmb),
      imc: imc.toFixed(1),
      classificacaoIMC,
      agua,
    };
  }
}
