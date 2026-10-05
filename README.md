# meu-site-projeto 🌐

> **Portal do Voluntariado para a ONG "Mãos que Transformam"**: Uma plataforma web desenvolvida como uma Single Page Application (SPA) nativa, desenhada para conectar voluntários a causas sociais de impacto urgente, como educação comunitária e combate à fome.

---

## 🚀 Funcionalidades Principais (Features)

*   **Arquitetura SPA (Single Page Application):** Navegação fluida e instantânea gerida inteiramente via JavaScript (`router.js`), trocando dinamicamente o conteúdo dentro do contentor `#app` sem recarregar a página.
*   **Divisão de Causas de Impacto:** Secções estruturadas para projetos urgentes (Educação Comunitária e Distribuição de Alimentos).
*   **Encaminhamento Dinâmico (`data-link`):** Botões de ação configurados para direcionar o utilizador diretamente para o formulário de cadastro de colaboradores através do roteador interno.
*   **Estrutura Semântica Base:** Uso rigoroso de tags semânticas do HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) para garantir SEO e acessibilidade.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

O projeto foi construído utilizando tecnologias web nativas (*Vanilla Web Tech*), dispensando compiladores complexos:

*   **HTML5:** Estruturação semântica de todo o conteúdo e marcas de dados para o roteador.
*   **CSS3:** Estilização visual centralizada e isolada no ficheiro `style.css`.
*   **JavaScript Nativo (ES6+):** 
    *   `router.js`: Responsável pela interceção de cliques, gestão do histórico de navegação (`History API`) e renderização assíncrona das vistas.
    *   `app.js`: Inicialização e lógica global do ecossistema do portal.

---

## 📂 Estrutura de Pastas Operacional

O repositório está organizado da seguinte forma para garantir a separação de conceitos:

```text
meu-site-projeto/
├── css/
│   └── style.css          # Estilos globais da plataforma
├── imagens/
│   ├── voluntarios.jpg    # Imagem de destaque do cabeçalho
│   ├── criancas-estudando.jpg
│   └── alimentos.jpg
├── js/
│   ├── router.js          # Motor de rotas da SPA
│   └── app.js             # Script principal de inicialização
└── paginas/               # (Ou raiz)
    └── index.html         # Ponto de entrada e esqueleto da aplicação
```

---

## 📋 Pré-requisitos

Por ser uma aplicação estática e baseada em tecnologias nativas, os requisitos são mínimos:

*   Qualquer **Navegador Web** moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
*   Uma extensão de servidor local para evitar bloqueios de CORS ao carregar ficheiros locais via JS (Recomendado: **Live Server** para o VS Code).

---

## 🔧 Instalação e Execução

Siga os passos abaixo para testar e executar o portal localmente:

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com
   ```

2. **Navegar para a pasta do projeto:**
   ```bash
   cd meu-site-projeto
   ```

3. **Executar a aplicação:**
   * **Opção 1 (Recomendada):** Clique com o botão direito no ficheiro `index.html` dentro do VS Code e selecione **"Open with Live Server"**.
   * **Opção 2 (Via Terminal Python):** Se tiver o Python instalado, execute:
     ```bash
     python -m http.server 8000
     ```
     Depois, aceda a `http://localhost:8000` no seu navegador.

---

## 🧪 Validação e Qualidade de Código

*   **Semântica Base:** Validada de acordo com as especificações do W3C.
*   **Validação Assíncrona:** O roteador manipula os estados de navegação garantindo que caminhos como `/sobre` e `/cadastro` atualizem o ecrã sem quebras estruturais.

---

## ✒️ Autor

*   **Marcio Gilberto** - Desenvolvimento & Engenharia Frontend - [@o-seu-github](https://github.com)

