import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioComponent } from './formulario.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-resultado',
  template: '',
})
class ResultadoComponentStub {
  @Input() resultado: any;
  @Input() usuario: any;

  callRecomendacoes = jasmine.createSpy('callRecomendacoes');
}

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComponent, ResultadoComponentStub],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const resultadoDebugElement = fixture.debugElement.query(By.directive(ResultadoComponentStub));
    component.resultadoComponent = resultadoDebugElement ? resultadoDebugElement.componentInstance : null;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add restricoes when checkbox checked', () => {
    component.restricoesSelecionadas = [];
    component.atualizarRestricoes({ target: { checked: true } }, 'lactose');
    expect(component.restricoesSelecionadas).toContain('lactose');
  });

  it('should remove restricoes when checkbox unchecked', () => {
    component.restricoesSelecionadas = ['gluten'];
    component.atualizarRestricoes({ target: { checked: false } }, 'gluten');
    expect(component.restricoesSelecionadas).not.toContain('gluten');
  });

  it('should alert if required fields are missing on calcular', () => {
    spyOn(window, 'alert');
    component.usuario = {
      peso: null,
      altura: 170,
      idade: 30,
      sexo: 'masculino',
      dieta: 'lowcarb',
      objetivo: 'manter',
      restricoes: [],
    };
    component.calcular();
    expect(window.alert).toHaveBeenCalledWith('Por favor, preencha todos os campos obrigatórios!');
  });

  it('should calculate correct TMB, IMC, classificacaoIMC and agua', () => {
    component.usuario = {
      peso: 70,
      altura: 175,
      idade: 25,
      sexo: 'masculino',
      dieta: 'mediterranea',
      objetivo: 'emagrecimento',
      restricoes: [],
    };
    component.restricoesSelecionadas = [];

    component.calcular();

    // Força atualização dos inputs no componente filho
    fixture.detectChanges();

    expect(component.resultado.tmb).toBe(1674);
    expect(component.resultado.imc).toBe('22.9');
    expect(component.resultado.classificacaoIMC).toBe('Peso normal');
    expect(component.resultado.agua).toBe(2450);

    expect(component.resultadoComponent.callRecomendacoes).toHaveBeenCalledWith(component.resultado);
  });
});
