import { Injectable } from '@angular/core';
import { Dieta } from '../receitas/receitas.service';


@Injectable({
  providedIn: 'root'
})
export class RecomendacoesService {

  gerarRecomendacoes(dieta: Dieta, objetivo: string, restricoes: string[]) {
    const baseAlimentos = {
      proteinas: [
        'Frango', 'Tofu', 'Ovos', 'Peixe', 'Carne magra', 'Feijão', 'Grão de bico',
        'Lentilha', 'Quinoa', 'Tempeh', 'Seitan', 'Whey Protein', 'Ervilha'
      ],
      legumes: [
        'Cenoura', 'Abobrinha', 'Brócolis', 'Couve-flor', 'Berinjela', 'Pepino',
        'Pimentão', 'Tomate', 'Vagem', 'Aspargos', 'Couve de Bruxelas'
      ],
      verduras: [
        'Alface', 'Espinafre', 'Rúcula', 'Couve', 'Acelga', 'Agrião',
        'Almeirão', 'Mostarda', 'Radicchio', 'Alface roxa'
      ],
      carboidratos: [
        'Arroz integral', 'Batata-doce', 'Quinoa', 'Aveia', 'Inhame', 'Mandioca',
        'Cevada', 'Couscous', 'Milho', 'Macarrão integral'
      ]
    };

    const filtrarRestricoes = (lista: string[]) => {
      return lista.filter(item => {
        const itemLower = item.toLowerCase();
        if (restricoes.includes('lactose') && (itemLower.includes('leite') || itemLower.includes('whey'))) return false;
        if (restricoes.includes('gluten') && ['aveia', 'quinoa', 'arroz integral', 'cevada', 'couscous', 'macarrão integral', 'pão integral','seitan'].some(g => itemLower.includes(g))) return false;
        if (restricoes.includes('ovo') && itemLower === 'ovos') return false;
        if (restricoes.includes('proteina_do_leite') && ['tofu', 'whey protein'].some(p => itemLower.includes(p))) return false;
        if (restricoes.includes('frutos_do_mar') && (itemLower.includes('peixe') || itemLower.includes('camarão') || itemLower.includes('marisco'))) return false;
        return true;
      });
    };

    let proteinas = [...baseAlimentos.proteinas];
    let legumes = [...baseAlimentos.legumes];
    let verduras = [...baseAlimentos.verduras];
    let carboidratos = [...baseAlimentos.carboidratos];

    // Ajustes dieta
    if (dieta === 'lowcarb') {
      carboidratos = ['Abacate', 'Oleaginosas', 'Vegetais verdes', 'Chuchu', 'Abobrinha'];
    } else if (dieta === 'cetogenica') {
      carboidratos = ['Abacate', 'Oleaginosas', 'Chuchu'];
      proteinas = proteinas.filter(p => !['Feijão', 'Grão de bico', 'Lentilha', 'Quinoa'].includes(p));
    } else if (dieta === 'vegetariana') {
      proteinas = ['Tofu', 'Feijão', 'Grão de bico', 'Lentilha', 'Quinoa', 'Tempeh', 'Seitan', 'Ervilha'];
    }

    // Ajustes objetivo
    if (objetivo === 'emagrecimento') {
      carboidratos = carboidratos.filter(c => !['batata-doce', 'mandioca', 'cevada', 'couscous', 'milho', 'macarrão integral'].includes(c.toLowerCase()));
    } else if (objetivo === 'hipertrofia') {
      carboidratos.push('Batata inglesa', 'Pão integral');
      proteinas.push('Carne vermelha magra', 'Whey Protein');
    }

    proteinas = filtrarRestricoes(proteinas);
    legumes = filtrarRestricoes(legumes);
    verduras = filtrarRestricoes(verduras);
    carboidratos = filtrarRestricoes(carboidratos);

    return [
      { nome: 'Proteínas', itens: proteinas },
      { nome: 'Legumes', itens: legumes },
      { nome: 'Verduras', itens: verduras },
      { nome: 'Carboidratos', itens: carboidratos }
    ];
  }
}
