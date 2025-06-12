# Integrantes

**Integrantes:**
Arthur Henrique Ribeiro Chaves - RA: 422141860
Cairo Angelo Silva - RA: 42124827
João Pedro Ferreira Santiago - RA: 422119806
Lucas Ferreira Colombini - RA: 422142408
Otthon de Oliveira Candido - RA: 42125548
Samuel Pereira dos Santos - RA: 422220417
Vítor Hugo Damascena de Oliveira - RA: 42123335
Vítor Gabriel Campolina Silva - RA: 422222139

#  Link Apresentação Google Slides

https://docs.google.com/presentation/d/18EQJe-AV8Mkw9av3VHNPWT67-HwSZeEj_qldOc6AmDE/edit?usp=sharing

# NutriFacil

## 🥗 Visão Geral do Projeto

O **NutriFacil** é uma solução completa para planejamento alimentar personalizado, desenvolvida para ajudar usuários a montar planos alimentares de acordo com suas preferências e objetivos. A proposta é oferecer uma ferramenta intuitiva e eficaz para gerenciar dietas, calcular métricas de saúde e fornecer recomendações nutricionais.

![Screenshot 2025-06-05 at 23-31-19 NutriFacil](https://github.com/user-attachments/assets/b345de3d-2e1e-407f-b4ef-6285e6ea8778)


## 🚀 Funcionalidades Principais

- **Seleção de Dieta:** Escolha entre Mediterrânea, Low Carb, Cetogênica e Vegetariana.
- **Cálculos Nutricionais:** TMB (Mifflin-St Jeor), IMC e consumo diário de água.
- **Recomendações de Alimentos:** Sugestões de proteínas, vegetais e carboidratos com base na dieta e restrições.
- **Gerenciamento de Restrições:** Suporte a alergias como Lactose, Glúten, Ovos, Frutos do Mar, etc.
- **Objetivos Personalizados:** Suporte para emagrecimento e hipertrofia.
- **Testes:** Cobertura com testes unitários (Jasmine/Karma) e possibilidade de testes E2E.

![Screenshot 2025-06-05 at 23-32-40 NutriFacil](https://github.com/user-attachments/assets/2b8fd509-4103-44d6-ba5e-1e1c088adb88)


## 🛠️ Tecnologias Utilizadas

- Angular CLI (ferramenta para desenvolvimento)

- TypeScript (linguagem principal)

- HTML5 & SCSS (marcação e estilos)

- ng2-charts (biblioteca de gráficos)

- FormsModule (módulo Angular para formulários)

- ng-bootstrap (componentes UI Bootstrap para Angular)

- Karma & Jasmine (ferramentas para testes unitários)

  ## Como Configurar e Rodar o Projeto

Para configurar e rodar o projeto NutriFacil em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js (que inclui o npm) e o Angular CLI instalados em sua máquina.

1.  **Instalar Node.js e npm:** Baixe e instale a versão LTS mais recente do site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)

2.  **Instalar Angular CLI:** Abra seu terminal ou prompt de comando e execute:
    ```bash
    npm install -g @angular/cli
    ```

### Instalação

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/Otthon-Candido/NutriFacil.git
    ```

2.  **Navegue até o Diretório do Projeto:**
    ```bash
    cd NutriFacil
    ```

3.  **Instale as Dependências:**
    ```bash
    npm install
    ```

### Rodar a Aplicação

Para iniciar o servidor de desenvolvimento e rodar a aplicação localmente:

```bash
ng serve
```

Após a compilação, a aplicação estará disponível em `http://localhost:4200/` em seu navegador. As alterações no código-fonte serão automaticamente recarregadas.

## 📁 Estrutura do Projeto

```plaintext
NutriFacil/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── formulario/
│   │   │   ├── receitas/
│   │   │   └── resultado/
│   │   ├── home/
│   │   └── services/
│   │       |
│   │       ├── receitas/
│   │       └── recomendacoes/
│   ├── assets/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── README.md
├── tsconfig*.json
