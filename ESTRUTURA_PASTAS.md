# Estrutura de Pastas Recomendada

Esta é a estrutura recomendada para organizar seu projeto TCC:

```
tcc/
│
├── 📄 Index.html                    # Página principal
├── 📄 README.md                     # Documentação do projeto
├── 📄 GUIA_DESENVOLVIMENTO.md      # Guia de desenvolvimento
├── 📄 DICAS_COPILOT.md             # Dicas de uso do Copilot
├── 📄 ESTRUTURA_PASTAS.md          # Este arquivo
├── 📄 .copilot.yml                 # Configuração do Copilot
├── 📄 .gitignore                   # Arquivos a ignorar no Git
│
├── 📁 assets/                       # Arquivos estáticos
│   ├── 📁 css/
│   │   ├── styles.css              # Estilos customizados
│   │   └── responsive.css          # Estilos responsivos
│   │
│   ├── 📁 js/
│   │   ├── script.js               # Scripts principais
│   │   └── utils.js                # Funções utilitárias
│   │
│   └── 📁 img/
│       ├── logo.png                # Logo do projeto
│       ├── hero-bg.jpg             # Imagem hero
│       └── projects/               # Imagens de projetos
│           ├── projeto1.jpg
│           ├── projeto2.jpg
│           └── projeto3.jpg
│
├── 📁 pages/                        # Páginas adicionais
│   ├── sobre.html                  # Página sobre
│   ├── projetos.html               # Página de projetos
│   ├── contato.html                # Página de contato
│   └── portfolio.html              # Página de portfólio
│
├── 📁 components/                   # Componentes reutilizáveis
│   ├── navbar.html                 # Componente navbar
│   ├── card.html                   # Componente card
│   ├── footer.html                 # Componente footer
│   └── form.html                   # Componente formulário
│
└── 📁 docs/                         # Documentação adicional
    ├── INSTALACAO.md               # Guia de instalação
    ├── DEPLOY.md                   # Guia de publicação
    └── PERGUNTAS_FREQUENTES.md    # FAQ
```

## 📝 Descrição dos Arquivos

### Raiz do Projeto

| Arquivo | Descrição |
|---------|-----------|
| `Index.html` | Página inicial do projeto |
| `README.md` | Documentação principal |
| `GUIA_DESENVOLVIMENTO.md` | Guia técnico para desenvolvimento |
| `DICAS_COPILOT.md` | Como usar GitHub Copilot |
| `.copilot.yml` | Configuração do Copilot |
| `.gitignore` | Arquivos ignorados pelo Git |

### Pasta `assets/`

Contém todos os arquivos estáticos (CSS, JavaScript, imagens):

- **css/** - Folhas de estilo
- **js/** - Scripts JavaScript
- **img/** - Imagens do projeto

### Pasta `pages/`

Páginas adicionais do projeto:

- **sobre.html** - Informações sobre o projeto
- **projetos.html** - Galeria de projetos
- **contato.html** - Formulário de contato
- **portfolio.html** - Portfólio pessoal

### Pasta `components/`

Componentes HTML reutilizáveis que podem ser incluídos em diferentes páginas.

### Pasta `docs/`

Documentação adicional e guias específicos.

## 🛠️ Como Usar Esta Estrutura

### 1. **Importar Componentes**

No seu `Index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <!-- Navbar -->
    <!-- Importar navbar.html via JavaScript ou copiar conteúdo -->
    
    <!-- Seções do site -->
    <main>
        <!-- Conteúdo principal -->
    </main>
    
    <!-- Footer -->
    <!-- Importar footer.html -->
    
    <!-- Scripts -->
    <script src="assets/js/script.js"></script>
</body>
</html>
```

### 2. **Adicionar Novas Páginas**

Crie novas páginas em `pages/`:

```bash
pages/
├── sobre.html
├── projetos.html
└── contato.html
```

Cada página pode reutilizar CSS e JavaScript comuns.

### 3. **Organizar Imagens**

```bash
assets/img/
├── logo.png
├── hero-bg.jpg
└── projects/
    ├── projeto1.jpg
    ├── projeto2.jpg
    └── projeto3.jpg
```

### 4. **Modularizar JavaScript**

Separe scripts por funcionalidade:

```bash
assets/js/
├── script.js        # Scripts principais
├── validacao.js     # Validação de formulários
├── animacoes.js     # Animações
└── utils.js         # Funções utilitárias
```

## 🚀 Boas Práticas

### ✅ **DO's**

- Organize arquivos por tipo (css, js, img)
- Use nomes descritivos para arquivos
- Mantenha pastas limpas e organizadas
- Comente código complexo
- Use convenção de nomenclatura consistente

### ❌ **DON'Ts**

- Não misture tipos de arquivo na mesma pasta
- Não use nomes genéricos como "arquivo1", "arquivo2"
- Não deixe arquivos soltos na raiz
- Não ignore `.gitignore`
- Não duplique componentes

## 📂 Adicionando Novos Diretórios

Se precisar adicionar novos diretórios:

1. **Pasta de Ícones**: `assets/icons/`
2. **Pasta de Fontes**: `assets/fonts/`
3. **Pasta de Vídeos**: `assets/videos/`
4. **Pasta de PDFs**: `assets/docs/`
5. **Pasta de Dados**: `data/`

## 🔗 Referência de Caminhos

Ao importar recursos, use caminhos relativos:

```html
<!-- CSS -->
<link rel="stylesheet" href="assets/css/styles.css">

<!-- JavaScript -->
<script src="assets/js/script.js"></script>

<!-- Imagens -->
<img src="assets/img/logo.png" alt="Logo">

<!-- De uma página dentro de pages/ -->
<link rel="stylesheet" href="../assets/css/styles.css">
```

## 🎯 Próximos Passos

1. Clone ou crie os diretórios conforme descrito
2. Adicione seus arquivos nos lugares corretos
3. Atualize os caminhos nos arquivos HTML
4. Teste os links em todas as páginas
5. Commit para o Git

---

**Dica:** Manter uma estrutura clara desde o início facilita muito na hora de trabalhar em equipe e na manutenção do projeto!
