# NutriFacil

## 🥗 Visão Geral do Projeto

O **NutriFacil** é uma solução completa para planejamento alimentar personalizado, desenvolvida para ajudar usuários a montar planos alimentares de acordo com suas preferências e objetivos. A proposta é oferecer uma ferramenta intuitiva e eficaz para gerenciar dietas, calcular métricas de saúde e fornecer recomendações nutricionais.

## 🚀 Funcionalidades Principais

- **Seleção de Dieta:** Escolha entre Mediterrânea, Low Carb, Cetogênica e Vegetariana.
- **Cálculos Nutricionais:** TMB (Mifflin-St Jeor), IMC e consumo diário de água.
- **Recomendações de Alimentos:** Sugestões de proteínas, vegetais e carboidratos com base na dieta e restrições.
- **Gerenciamento de Restrições:** Suporte a alergias como Lactose, Glúten, Ovos, Frutos do Mar, etc.
- **Objetivos Personalizados:** Suporte para emagrecimento e hipertrofia.
- **Testes:** Cobertura com testes unitários (Jasmine/Karma) e possibilidade de testes E2E.
- **Documentação Atualizada:** README estruturado e boas práticas.

## 🛠️ Tecnologias Utilizadas

- Angular CLI
- TypeScript
- SCSS + HTML5
- ng2-charts
- FormsModule
- ng-bootstrap
- Karma & Jasmine (testes)

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
│   │       ├── calculo/
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

## Executando Testes

### Testes Unitários

Para executar os testes unitários via [Karma](https://karma-runner.github.io/):

```bash
ng test
```

### Testes End-to-End (E2E)

Para executar os testes end-to-end, você precisará de um pacote que implemente capacidades de teste E2E (ex: Cypress, Protractor). Se configurado, você pode rodar:

```bash
ng e2e
```