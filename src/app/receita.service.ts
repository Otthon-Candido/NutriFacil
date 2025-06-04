// receitas.service.ts
import { Injectable } from '@angular/core';
export type Dieta = 'mediterranea' | 'lowcarb' | 'cetogenica' | 'vegetariana' | null;
@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private receitas = {
    mediterranea: [
      { nome: 'Salada Grega', ingredientes: ['Tomate', 'Pepino', 'Azeitona', 'Queijo feta'], modoPreparo: 'Misture todos os ingredientes.' },
      { nome: 'Peixe Assado', ingredientes: ['Peixe', 'Azeite', 'Limão'], modoPreparo: 'Asse o peixe com azeite e limão.' }
    ],
    lowcarb: [
      { nome: 'Omelete de Espinafre', ingredientes: ['Ovos', 'Espinafre', 'Queijo'], modoPreparo: 'Bata os ovos, misture o espinafre e queijo, e cozinhe.' },
      { nome: 'Frango com Brócolis', ingredientes: ['Frango', 'Brócolis', 'Azeite'], modoPreparo: 'Cozinhe o frango e brócolis no azeite.' }
    ],
    cetogenica: [
      { nome: 'Abacate Recheado', ingredientes: ['Abacate', 'Bacon', 'Queijo'], modoPreparo: 'Recheie o abacate com bacon e queijo.' },
      { nome: 'Salada de Ovo', ingredientes: ['Ovo', 'Maionese', 'Alface'], modoPreparo: 'Misture ovos cozidos com maionese e sirva na alface.' }
    ],
    vegetariana: [
      { nome: 'Quiche de Legumes', ingredientes: ['Legumes', 'Ovos', 'Queijo'], modoPreparo: 'Prepare a quiche com legumes, ovos e queijo.' },
      { nome: 'Strogonoff de Cogumelos', ingredientes: ['Cogumelos', 'Creme de leite', 'Arroz'], modoPreparo: 'Cozinhe cogumelos com creme de leite e sirva com arroz.' }
    ]
  };

getReceitas(dieta: Dieta) {
   
  if(dieta != null)
  return this.receitas[dieta] || [];
  else return null
}

}
