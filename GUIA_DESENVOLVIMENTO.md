<!-- markdown-start -->
# 📖 Guia de Desenvolvimento - TCC Design Digital

Guia completo para trabalhar com este projeto TCC, com foco em responsividade, Bootstrap 5 e desenvolvimento web moderno.

## 🎯 Objetivos de Aprendizado

Ao trabalhar com este projeto, você aprenderá:

1. ✅ Estrutura HTML5 semântica
2. ✅ Design responsivo com Bootstrap 5
3. ✅ Mobile-first approach
4. ✅ Acessibilidade na web (a11y)
5. ✅ Git e controle de versão
6. ✅ Colaboração com IA (GitHub Copilot)

## 🏗️ Estrutura Base de uma Página HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Seus estilos -->
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <!-- Conteúdo da página -->
    
    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Seus scripts -->
    <script src="assets/js/script.js"></script>
</body>
</html>
```

## 📱 Responsividade com Bootstrap

### Sistema de Grid (12 colunas)

```html
<div class="container">
  <div class="row">
    <!-- Mobile: 12 colunas, Tablet: 6 colunas, Desktop: 4 colunas -->
    <div class="col-12 col-md-6 col-lg-4">
      Coluna responsiva
    </div>
  </div>
</div>
```

### Containers

```html
<!-- Full width até breakpoint -->
<div class="container-fluid">Fluido</div>

<!-- Com max-width -->
<div class="container">Fixo</div>

<!-- Specific breakpoints -->
<div class="container-md">Começa fluido, fica fixo em md</div>
```

### Breakpoints Principais

```html
<!-- Visível apenas em mobile -->
<div class="d-block d-md-none">Mobile Only</div>

<!-- Oculto em mobile -->
<div class="d-none d-md-block">Desktop Only</div>

<!-- Diferentes tamanhos por breakpoint -->
<div class="col-12 col-sm-6 col-md-4 col-lg-3">Responsivo</div>
```

## 🎨 Componentes Bootstrap Essenciais

### Navbar (Barra de Navegação)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Logo/Título</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Cards

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Descrição</p>
    <a href="#" class="btn btn-primary">Botão</a>
  </div>
</div>
```

### Buttons

```html
<!-- Variações de cores -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>

<!-- Tamanhos -->
<button class="btn btn-lg">Large</button>
<button class="btn btn-sm">Small</button>

<!-- Estilos -->
<button class="btn btn-primary">Preenchido</button>
<button class="btn btn-outline-primary">Outline</button>
```

### Formulários

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="seu@email.com">
  </div>
  
  <div class="mb-3">
    <label for="mensagem" class="form-label">Mensagem</label>
    <textarea class="form-control" id="mensagem" rows="5"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### Grid Responsivo (Cards em Grid)

```html
<div class="container">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card 1</h5>
        </div>
      </div>
    </div>
    <!-- Mais cards -->
  </div>
</div>
```

## 🎭 Utilities Úteis do Bootstrap

### Espaçamento (Margin e Padding)

```html
<!-- Margin -->
<div class="m-1">Margin 1 (0.25rem)</div>
<div class="mt-3">Margin-top 3 (1rem)</div>
<div class="mb-md-5">Margin-bottom 5 a partir de md (3rem)</div>

<!-- Padding -->
<div class="p-2">Padding 2 (0.5rem)</div>
<div class="px-3">Padding horizontal 3</div>
<div class="py-md-4">Padding vertical 4 a partir de md</div>
```

### Display e Visibilidade

```html
<!-- Display -->
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>
<div class="d-none d-md-block">Oculto em mobile</div>

<!-- Flexbox -->
<div class="d-flex justify-content-center">Centralizado</div>
<div class="d-flex align-items-center">Verticamente centralizado</div>
<div class="d-flex flex-column">Direção vertical</div>
<div class="d-flex gap-3">Com espaço entre itens</div>
```

### Texto

```html
<!-- Alinhamento -->
<p class="text-center">Centralizado</p>
<p class="text-end">Alinhado à direita</p>
<p class="text-md-start">Alinhado à esquerda a partir de md</p>

<!-- Transformação -->
<p class="text-uppercase">MAIÚSCULA</p>
<p class="text-lowercase">minúscula</p>
<p class="text-capitalize">Capitalizado</p>

<!-- Peso e tamanho -->
<p class="fw-bold">Bold</p>
<p class="fs-5">Font size 5</p>
<p class="lh-1">Line height 1</p>
```

### Cores

```html
<!-- Cores de texto -->
<p class="text-primary">Primary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>

<!-- Cores de fundo -->
<div class="bg-primary text-white">Fundo azul</div>
<div class="bg-light">Fundo claro</div>
```

## ♿ Acessibilidade (a11y)

### Checklist de Acessibilidade

- ✅ Usar tags semânticas (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Atributo `alt` em todas as imagens
- ✅ Labels para inputs de formulário
- ✅ Contraste de cores adequado (WCAG AA: 4.5:1)
- ✅ Teclado navegável (Tab, Enter, Escape)
- ✅ Atributos ARIA quando necessário
- ✅ Hierarquia de headings correta (h1 → h2 → h3)

### Exemplos

```html
<!-- Imagem com alt -->
<img src="foto.jpg" alt="Descrição da foto para leitores de tela">

<!-- Form com label -->
<label for="nome">Nome</label>
<input type="text" id="nome" name="nome">

<!-- Contrast ratio adequado -->
<div class="text-white bg-dark">Bom contraste</div>

<!-- Heading hierarchy -->
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Sub-subtítulo</h3>
```

## 🎨 Customizando o Bootstrap

### Via Classes

```html
<!-- Bootstrap oferece muita flexibilidade com utilities -->
<div class="btn btn-primary rounded-pill">Botão arredondado</div>
<div class="card border-primary shadow-lg">Card com sombra</div>
```

### Via CSS Customizado

Crie um arquivo `assets/css/styles.css`:

```css
/* Variáveis CSS personalizadas */
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --dark-color: #2c3e50;
}

/* Classes customizadas */
.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 80px 0;
  color: white;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
```

## 🤖 Usando GitHub Copilot

### Prompts Úteis

```
// Para criar componentes
@copilot crie um card responsivo com imagem, título e descrição

// Para melhorar responsividade
@copilot faça este layout responsivo para mobile, tablet e desktop

// Para adicionar funcionalidade
@copilot adicione validação ao formulário de contato

// Para acessibilidade
@copilot revise este código para melhorar a acessibilidade

// Para refatoração
@copilot refatore este HTML usando Bootstrap 5 utilities
```

## 📚 Recursos Úteis

### Documentação
- Bootstrap 5: https://getbootstrap.com/docs/5.3/
- MDN Web Docs: https://developer.mozilla.org/
- Can I Use (compatibilidade): https://caniuse.com/

### Ferramentas
- VS Code: https://code.visualstudio.com/
- Lighthouse (auditar): chrome://inspect
- DevTools: F12 no navegador

### Validação
- HTML Validator: https://validator.w3.org/
- CSS Validator: https://jigsaw.w3.org/css-validator/
- Accessibility: https://www.achecker.ca/

## 🚀 Próximos Passos

1. **Clone o projeto**: `git clone https://github.com/professor-brgozzi/tcc.git`
2. **Estude a estrutura**: Analise o arquivo `Index.html`
3. **Experimente**: Modifique cores, textos e layouts
4. **Use o Copilot**: Peça ajuda para criar novos componentes
5. **Teste responsividade**: F12 → Device Toolbar (Ctrl+Shift+M)
6. **Compartilhe**: Faça um Fork e compartilhe suas melhorias!

---

**Dúvidas?** Consulte a documentação do Bootstrap ou use `@copilot` para ajuda!
