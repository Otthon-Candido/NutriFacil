import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoComponent } from './resultado.component';
import { ReceitasComponent } from '../receitas/receitas.component';
import { RecomendacoesService } from 'src/app/services/recomendacoes/recomendacoes.service';
import { ReceitasService, Dieta } from 'src/app/services/receitas/receitas.service';
import { Component, Input } from '@angular/core';

// Mock do componente filho ReceitasComponent
@Component({
  selector: 'app-receitas',
  template: ''
})
class MockReceitasComponent {
  @Input() dietaUsuario!: Dieta;
  @Input() restricoesUsuario: string[] = [];
  @Input() objetivoUsuario: string | null = null;

  filtrarReceitas = jasmine.createSpy('filtrarReceitas');
}

// Mock dos serviços
class MockRecomendacoesService {
  gerarRecomendacoes = jasmine.createSpy('gerarRecomendacoes').and.returnValue([
    { categoria: 'Proteínas', itens: ['Frango', 'Peixe'] }
  ]);
}

class MockReceitasService {}

describe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadoComponent, MockReceitasComponent],
      providers: [
        { provide: RecomendacoesService, useClass: MockRecomendacoesService },
        { provide: ReceitasService, useClass: MockReceitasService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;

    component.usuario = {
      dieta: 'lowcarb' as Dieta,
      objetivo: 'emagrecimento',
      restricoes: ['gluten']
    };

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve gerar recomendações no ngOnChanges', () => {
    component.ngOnChanges({});
    expect(component.recomendacoes.length).toBeGreaterThan(0);
  });

  it('deve abrir e fechar o accordion corretamente', () => {
    component.toggleAccordion(1);
    expect(component.isOpen(1)).toBeTrue();

    component.toggleAccordion(1);
    expect(component.isOpen(1)).toBeFalse();
  });

  it('deve chamar filtrarReceitas no child component', () => {
    // Configura o componente filho manualmente
    const mockReceitasComponent = new MockReceitasComponent();
    component.receitasComponent = mockReceitasComponent as any;

    component.callRecomendacoes({});

    expect(mockReceitasComponent.filtrarReceitas).toHaveBeenCalledWith(component.recomendacoes);
  });
});