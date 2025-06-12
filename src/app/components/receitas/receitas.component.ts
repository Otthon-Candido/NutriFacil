import {
  Component,
  Input,
} from '@angular/core';
import { Dieta } from 'src/app/services/receitas/receitas.service';

// Importa o array de receitas
import { RECEITAS } from './receitas.data';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss'],
})
export class ReceitasComponent {
  @Input() dietaUsuario!: Dieta | ''; // agora aceita também string vazia
  @Input() restricoesUsuario: string[] = [];
  @Input() objetivoUsuario: string | null = null;

  receitasFiltradas: any[] = [];

  // Usa as receitas importadas
  private receitas: any[] = [];
  firstLoad = true;

  public filtrarReceitas(recomendacoes: any[] = []) {
    this.receitas = RECEITAS;
    const dietaVazia = !this.dietaUsuario || this.dietaUsuario == null;
    const objetivoVazio = !this.objetivoUsuario || this.objetivoUsuario === '';
    const alimentosVazios = !recomendacoes || recomendacoes.length === 0;

    // Filtra pela dieta (se tiver)
    let receitas = this.receitas.filter((receita) =>
      dietaVazia ? true : receita.dieta.includes(this.dietaUsuario)
    );

    // Filtra pelo objetivo (se tiver)
    receitas = receitas.filter((receita) =>
      objetivoVazio ? true : receita.objetivo.includes(this.objetivoUsuario!)
    );

    // Filtra pelas restrições
    if (this.restricoesUsuario.length > 0) {
      const restricoesLower = this.restricoesUsuario.map(r => r.toLowerCase());
      receitas = receitas.filter(
        (receita) =>
          !receita.restricoesProibidas.some((rp: string) =>
            restricoesLower.includes(rp.toLowerCase())
          )
      );
    }

    // Filtra pelos alimentos recomendados (se tiver)
    if (!alimentosVazios) {
      const alimentosDisponiveis = recomendacoes
        .flatMap((cat) => cat.itens)
        .map((item: string) => item.toLowerCase());

      receitas = receitas.filter((receita) =>
        receita.ingredientes.some((ingrediente: string) =>
          alimentosDisponiveis.includes(ingrediente.toLowerCase())
        )
      );
    }

    this.receitasFiltradas = receitas;
  }
}