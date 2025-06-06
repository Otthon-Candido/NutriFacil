import { TestBed } from '@angular/core/testing';
import { RecomendacoesService } from './recomendacoes.service';
import { Dieta } from '../receitas/receitas.service';

describe('RecomendacoesService', () => {
  let service: RecomendacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendacoesService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar recomendações padrão (sem restrições)', () => {
    const resultado = service.gerarRecomendacoes('lowcarb', 'emagrecimento', []);
    expect(resultado.length).toBe(4);
    expect(resultado.find(r => r.nome === 'Carboidratos')?.itens).toContain('Abacate');
  });

  it('deve remover itens com lactose', () => {
    const resultado = service.gerarRecomendacoes('vegetariana', 'hipertrofia', ['lactose']);
    const proteinas = resultado.find(r => r.nome === 'Proteínas')?.itens.join(',').toLowerCase() ?? '';
    expect(proteinas.includes('whey')).toBeFalse();
    expect(proteinas.includes('tofu')).toBeTrue(); // tofu não tem lactose
  });

  it('deve remover itens com glúten', () => {
    const resultado = service.gerarRecomendacoes('lowcarb', 'hipertrofia', ['gluten']);
    const carbs = resultado.find(r => r.nome === 'Carboidratos')?.itens.map(i => i.toLowerCase()) ?? [];
    expect(carbs).not.toContain('aveia');
    expect(carbs).not.toContain('macarrão integral');
  });

  it('deve aplicar dieta cetogênica corretamente', () => {
    const resultado = service.gerarRecomendacoes('cetogenica', 'emagrecimento', []);
    const proteinas = resultado.find(r => r.nome === 'Proteínas')?.itens ?? [];
    expect(proteinas).not.toContain('Feijão');
    expect(proteinas).not.toContain('Grão de bico');
    expect(proteinas).toContain('Frango');
  });

  it('deve aplicar objetivo hipertrofia corretamente', () => {
    const resultado = service.gerarRecomendacoes('lowcarb', 'hipertrofia', []);
    const proteinas = resultado.find(r => r.nome === 'Proteínas')?.itens ?? [];
    const carboidratos = resultado.find(r => r.nome === 'Carboidratos')?.itens ?? [];

    expect(proteinas).toContain('Carne vermelha magra');
    expect(proteinas).toContain('Whey Protein');
    expect(carboidratos).toContain('Batata inglesa');
    expect(carboidratos).toContain('Pão integral');
  });

  it('deve filtrar corretamente múltiplas restrições', () => {
    const resultado = service.gerarRecomendacoes('vegetariana', 'emagrecimento', ['gluten', 'ovo', 'lactose']);
    const proteinas = resultado.find(r => r.nome === 'Proteínas')?.itens.join(',').toLowerCase() ?? '';
    expect(proteinas.includes('whey')).toBeFalse();
    expect(proteinas.includes('ovos')).toBeFalse();
    expect(proteinas.includes('seitan')).toBeFalse(); // contém glúten
  });
});