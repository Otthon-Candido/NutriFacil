import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitasComponent } from './receitas.component';
import { RECEITAS } from './receitas.data';

describe('ReceitasComponent', () => {
  let component: ReceitasComponent;
  let fixture: ComponentFixture<ReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceitasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar todas as receitas se nenhuma dieta, objetivo, restrição ou recomendação forem informadas', () => {
    component.dietaUsuario = '';
    component.objetivoUsuario = null;
    component.restricoesUsuario = [];

    component.filtrarReceitas();
    expect(component.receitasFiltradas.length).toBe(RECEITAS.length);
  });

  it('deve filtrar pelas restrições', () => {
    component.dietaUsuario = '';
    component.objetivoUsuario = null;
    component.restricoesUsuario = ['ovo'];

    component.filtrarReceitas();
    const temOvo = component.receitasFiltradas.some((r) =>
      r.restricoesProibidas.includes('ovo')
    );
    expect(temOvo).toBeFalse();
  });

  it('deve filtrar pela dieta', () => {
    component.dietaUsuario = 'lowcarb';
    component.objetivoUsuario = null;
    component.restricoesUsuario = [];

    component.filtrarReceitas();
    expect(component.receitasFiltradas.every((r) => r.dieta.includes('lowcarb'))).toBeTrue();
  });

  it('deve filtrar pelo objetivo', () => {
    component.dietaUsuario = '';
    component.objetivoUsuario = 'emagrecimento';
    component.restricoesUsuario = [];

    component.filtrarReceitas();
    expect(component.receitasFiltradas.every((r) => r.objetivo.includes('emagrecimento'))).toBeTrue();
  });

  it('deve filtrar por alimentos recomendados', () => {
    component.dietaUsuario = '';
    component.objetivoUsuario = null;
    component.restricoesUsuario = [];

    const recomendacoes = [
      {
        categoria: 'verduras',
        itens: ['alface', 'tomate'],
      },
    ];

    component.filtrarReceitas(recomendacoes);

    expect(component.receitasFiltradas.length).toBeGreaterThan(0);
    expect(component.receitasFiltradas.every((r) =>
      r.ingredientes.some((i: string) => ['alface', 'tomate'].includes(i.toLowerCase()))
    )).toBeTrue();
  });

  it('deve aplicar todos os filtros combinados corretamente', () => {
    component.dietaUsuario = 'mediterranea';
    component.objetivoUsuario = 'emagrecimento';
    component.restricoesUsuario = ['gluten'];

    const recomendacoes = [
      {
        categoria: 'verduras',
        itens: ['alface'],
      },
    ];

    component.filtrarReceitas(recomendacoes);

    expect(component.receitasFiltradas.length).toBe(0); // receita mediterrânea tem 'gluten'
  });
});