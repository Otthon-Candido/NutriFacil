
export interface Receita {
  nome: string;
  ingredientes: string[];
  dieta: string[];
  objetivo: string[];
  restricoesProibidas: string[];
}


export const RECEITAS: Receita[] = [
  {
    nome: 'Salada Mediterrânea com Grão-de-bico',
    ingredientes: ['Grão-de-bico', 'Tomate', 'Pepino', 'Azeite de oliva', 'Limão'],
    dieta: ['mediterranea', 'vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Frango grelhado com legumes',
    ingredientes: ['Frango', 'Brócolis', 'Cenoura', 'Azeite', 'Alho'],
    dieta: ['lowcarb', 'cetogenica'],
    objetivo: ['hipertrofia', 'emagrecimento'],
    restricoesProibidas: ['proteina_do_leite']
  },
  {
    nome: 'Omelete de espinafre com tomate',
    ingredientes: ['Ovo', 'Espinafre', 'Tomate', 'Cebola'],
    dieta: ['lowcarb', 'vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Smoothie de banana com proteína vegetal',
    ingredientes: ['Banana', 'Leite de amêndoas', 'Proteína vegetal'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['lactose']
  },
  {
    nome: 'Salmão ao forno com ervas',
    ingredientes: ['Salmão', 'Alecrim', 'Limão', 'Azeite'],
    dieta: ['cetogenica', 'mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Panqueca de aveia com banana',
    ingredientes: ['Aveia', 'Banana', 'Ovo', 'Canela'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['ovo', 'gluten']
  },
  {
    nome: 'Tabule de quinoa',
    ingredientes: ['Quinoa', 'Pepino', 'Tomate', 'Salsinha', 'Limão'],
    dieta: ['vegetariana', 'mediterranea'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Hambúrguer de lentilha',
    ingredientes: ['Lentilha', 'Cebola', 'Alho', 'Farinha de arroz'],
    dieta: ['vegetariana', 'lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['gluten']
  },
  {
    nome: 'Iogurte natural com frutas vermelhas',
    ingredientes: ['Iogurte natural', 'Morango', 'Amora', 'Mel'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['lactose', 'proteina_do_leite']
  },
  {
    nome: 'Tofu grelhado com legumes',
    ingredientes: ['Tofu', 'Abobrinha', 'Pimentão', 'Azeite'],
    dieta: ['vegetariana', 'lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['soja']
  },
  {
    nome: 'Arroz integral com frango e brócolis',
    ingredientes: ['Arroz integral', 'Frango', 'Brócolis', 'Cebola'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Wrap de alface com carne moída',
    ingredientes: ['Carne moída', 'Alface', 'Tomate', 'Alho'],
    dieta: ['lowcarb', 'cetogenica'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Risoto de quinoa com cogumelos',
    ingredientes: ['Quinoa', 'Cogumelos', 'Cebola', 'Alho', 'Azeite'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Pão de queijo fit',
    ingredientes: ['Polvilho', 'Queijo branco', 'Ovo'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['lactose', 'proteina_do_leite', 'ovo']
  },
  {
    nome: 'Tilápia grelhada com purê de batata-doce',
    ingredientes: ['Tilápia', 'Batata-doce', 'Alho', 'Azeite'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Cuscuz nordestino com ovo',
    ingredientes: ['Flocão de milho', 'Ovo', 'Sal'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Espaguete de abobrinha com molho de tomate',
    ingredientes: ['Abobrinha', 'Tomate', 'Cebola', 'Manjericão'],
    dieta: ['lowcarb', 'vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Feijão tropeiro com couve',
    ingredientes: ['Feijão', 'Couve', 'Alho', 'Ovo', 'Farinha'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo', 'gluten']
  },
  {
    nome: 'Bolo de banana sem açúcar',
    ingredientes: ['Banana', 'Aveia', 'Ovo', 'Canela'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['gluten', 'ovo']
  },
  {
    nome: 'Crepioca de frango',
    ingredientes: ['Tapioca', 'Ovo', 'Frango desfiado'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo']
  },
   {
    nome: 'Frango ao curry com arroz integral',
    ingredientes: ['Frango', 'Curry', 'Arroz integral', 'Cebola'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Salada de quinoa com frango desfiado',
    ingredientes: ['Quinoa', 'Frango', 'Tomate', 'Azeite', 'Limão'],
    dieta: ['mediterranea'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Espetinho de frango com legumes',
    ingredientes: ['Frango', 'Pimentão', 'Cebola', 'Abobrinha'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Berinjela recheada com carne moída',
    ingredientes: ['Berinjela', 'Carne moída', 'Cebola', 'Tomate'],
    dieta: ['cetogenica'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Tapioca com pasta de amendoim',
    ingredientes: ['Tapioca', 'Pasta de amendoim'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Batata-doce assada com canela',
    ingredientes: ['Batata-doce', 'Canela'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Lasanha de abobrinha com carne',
    ingredientes: ['Abobrinha', 'Carne moída', 'Molho de tomate'],
    dieta: ['cetogenica'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Iogurte com granola sem açúcar',
    ingredientes: ['Iogurte natural', 'Granola sem açúcar', 'Mel'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['lactose']
  },
  {
    nome: 'Bolinho de batata-doce com frango',
    ingredientes: ['Batata-doce', 'Frango desfiado', 'Cebolinha'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Patê de atum com cenoura',
    ingredientes: ['Atum', 'Cenoura', 'Limão'],
    dieta: ['lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Panqueca de tapioca com ovo',
    ingredientes: ['Tapioca', 'Ovo'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Tofu ao molho de shoyu com legumes',
    ingredientes: ['Tofu', 'Shoyu', 'Brócolis', 'Cenoura'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['soja']
  },
  {
    nome: 'Abacate amassado com limão e sal',
    ingredientes: ['Abacate', 'Limão', 'Sal'],
    dieta: ['cetogenica', 'vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Omelete de claras com espinafre',
    ingredientes: ['Clara de ovo', 'Espinafre', 'Cebola'],
    dieta: ['lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Salada de grão-de-bico com atum',
    ingredientes: ['Grão-de-bico', 'Atum', 'Tomate', 'Limão'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Creme de abóbora com gengibre',
    ingredientes: ['Abóbora', 'Gengibre', 'Cebola'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Salada de lentilha com cenoura e maçã',
    ingredientes: ['Lentilha', 'Cenoura', 'Maçã', 'Limão'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Frango ao molho de laranja',
    ingredientes: ['Frango', 'Suco de laranja', 'Alho'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Hambúrguer caseiro com salada',
    ingredientes: ['Carne moída', 'Alface', 'Tomate'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Chips de batata-doce no forno',
    ingredientes: ['Batata-doce', 'Azeite', 'Sal'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
   {
    nome: 'Salada de rúcula com manga e castanhas',
    ingredientes: ['Rúcula', 'Manga', 'Castanha-do-pará'],
    dieta: ['vegetariana', 'mediterranea'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Peito de frango grelhado com batata-doce',
    ingredientes: ['Frango', 'Batata-doce'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Sopa de lentilha com legumes',
    ingredientes: ['Lentilha', 'Cenoura', 'Batata', 'Cebola'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Smoothie de banana com aveia',
    ingredientes: ['Banana', 'Aveia', 'Leite vegetal'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['gluten']
  },
  {
    nome: 'Bife acebolado com couve refogada',
    ingredientes: ['Carne bovina', 'Cebola', 'Couve'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Salada de alface com ovo cozido e azeite',
    ingredientes: ['Alface', 'Ovo', 'Azeite'],
    dieta: ['cetogenica'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Panqueca de banana com aveia',
    ingredientes: ['Banana', 'Aveia', 'Ovo'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Tabule de quinoa',
    ingredientes: ['Quinoa', 'Tomate', 'Cebola', 'Salsinha', 'Limão'],
    dieta: ['vegetariana', 'mediterranea'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Tilápia grelhada com brócolis cozido',
    ingredientes: ['Tilápia', 'Brócolis'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Bolo de banana fit',
    ingredientes: ['Banana', 'Aveia', 'Canela', 'Ovo'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },

  {
    nome: 'Salada de pepino com iogurte',
    ingredientes: ['Pepino', 'Iogurte natural', 'Hortelã'],
    dieta: ['mediterranea'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['lactose']
  },
  {
    nome: 'Crepioca com queijo branco',
    ingredientes: ['Tapioca', 'Ovo', 'Queijo branco'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Abacaxi grelhado com canela',
    ingredientes: ['Abacaxi', 'Canela'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Salmão ao forno com aspargos',
    ingredientes: ['Salmão', 'Aspargos'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Omelete com cogumelos e espinafre',
    ingredientes: ['Ovo', 'Cogumelo', 'Espinafre'],
    dieta: ['lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Wrap de alface com carne moída',
    ingredientes: ['Alface', 'Carne moída', 'Tomate'],
    dieta: ['cetogenica'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Suco verde detox',
    ingredientes: ['Couve', 'Maçã', 'Limão', 'Gengibre'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Espaguete de abobrinha com molho de tomate',
    ingredientes: ['Abobrinha', 'Molho de tomate', 'Cebola'],
    dieta: ['lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Frango ao molho de iogurte e ervas',
    ingredientes: ['Frango', 'Iogurte', 'Ervas finas'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['lactose']
  },
  {
    nome: 'Bolinho de grão-de-bico assado',
    ingredientes: ['Grão-de-bico', 'Cebola', 'Temperos'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },

  {
    nome: 'Tostex integral com abacate e ovo',
    ingredientes: ['Pão integral', 'Abacate', 'Ovo'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['gluten', 'ovo']
  },
  {
    nome: 'Peito de frango com salada de agrião',
    ingredientes: ['Frango', 'Agrião', 'Tomate'],
    dieta: ['lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Cuscuz com ovo e tomate',
    ingredientes: ['Cuscuz', 'Ovo', 'Tomate'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['gluten', 'ovo']
  },
  {
    nome: 'Pipoca de panela com azeite',
    ingredientes: ['Milho de pipoca', 'Azeite'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Mix de nuts e frutas secas',
    ingredientes: ['Castanhas', 'Amêndoas', 'Uvas passas'],
    dieta: ['cetogenica'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Torta de legumes com farelo de aveia',
    ingredientes: ['Cenoura', 'Abobrinha', 'Aveia', 'Ovo'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['gluten', 'ovo']
  },
  {
    nome: 'Purê de mandioquinha com carne desfiada',
    ingredientes: ['Mandioquinha', 'Carne bovina'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Sopa de abobrinha com alho-poró',
    ingredientes: ['Abobrinha', 'Alho-poró', 'Cebola'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Arroz integral com frango desfiado e cenoura',
    ingredientes: ['Arroz integral', 'Frango', 'Cenoura'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Chá gelado de hibisco com limão',
    ingredientes: ['Hibisco', 'Limão', 'Água'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Panqueca de espinafre com frango',
    ingredientes: ['Espinafre', 'Frango', 'Ovo'],
    dieta: ['lowcarb'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Tartar de salmão com abacate',
    ingredientes: ['Salmão', 'Abacate', 'Cebolinha'],
    dieta: ['cetogenica'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Sopa de couve-flor com alho',
    ingredientes: ['Couve-flor', 'Alho', 'Cebola'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Espetinho de tofu com legumes',
    ingredientes: ['Tofu', 'Abobrinha', 'Pimentão'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['soja']
  },
  {
    nome: 'Macarrão de arroz com legumes e frango',
    ingredientes: ['Macarrão de arroz', 'Frango', 'Cenoura'],
    dieta: ['mediterranea'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Ceviche de tilápia com limão',
    ingredientes: ['Tilápia', 'Limão', 'Cebola'],
    dieta: ['lowcarb'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: ['frutos_do_mar']
  },
  {
    nome: 'Farofa de couve com ovo',
    ingredientes: ['Couve', 'Ovo', 'Farinha de mandioca'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: ['ovo']
  },
  {
    nome: 'Banana assada com canela e mel',
    ingredientes: ['Banana', 'Canela', 'Mel'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  },
  {
    nome: 'Caldinho de feijão',
    ingredientes: ['Feijão', 'Alho', 'Cebola'],
    dieta: ['vegetariana'],
    objetivo: ['hipertrofia'],
    restricoesProibidas: []
  },
  {
    nome: 'Salada de beterraba com limão',
    ingredientes: ['Beterraba', 'Limão', 'Azeite'],
    dieta: ['vegetariana'],
    objetivo: ['emagrecimento'],
    restricoesProibidas: []
  }
];