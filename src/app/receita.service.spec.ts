import { TestBed } from '@angular/core/testing';
import { ReceitasService, Dieta } from './receita.service';

describe('ReceitasService', () => {
  let service: ReceitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceitasService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar receitas para dieta mediterranea', () => {
    const receitas = service.getReceitas('mediterranea');
    expect(receitas).toBeDefined();
    expect(receitas).not.toBeNull();
    if (receitas) {
      expect(receitas.length).toBeGreaterThan(0);
      expect(receitas[0]).toEqual(
        jasmine.objectContaining({
          nome: jasmine.any(String),
          ingredientes: jasmine.any(Array),
          modoPreparo: jasmine.any(String),
        })
      );
    }
  });

  it('deve retornar receitas para dieta lowcarb', () => {
    const receitas = service.getReceitas('lowcarb');
    expect(receitas).toBeDefined();
    expect(receitas).not.toBeNull();
    if (receitas) {
      expect(receitas.length).toBeGreaterThan(0);
    }
  });

  it('deve retornar receitas para dieta cetogenica', () => {
    const receitas = service.getReceitas('cetogenica');
    expect(receitas).toBeDefined();
    expect(receitas).not.toBeNull();
    if (receitas) {
      expect(receitas.length).toBeGreaterThan(0);
    }
  });

  it('deve retornar receitas para dieta vegetariana', () => {
    const receitas = service.getReceitas('vegetariana');
    expect(receitas).toBeDefined();
    expect(receitas).not.toBeNull();
    if (receitas) {
      expect(receitas.length).toBeGreaterThan(0);
    }
  });

  it('deve retornar [] para dieta inválida', () => {
    const receitas = service.getReceitas('dieta-inexistente' as Dieta);
    expect(receitas).toEqual([]);
  });

  it('deve retornar null para dieta null', () => {
    const receitas = service.getReceitas(null);
    expect(receitas).toBeNull();
  });
});
