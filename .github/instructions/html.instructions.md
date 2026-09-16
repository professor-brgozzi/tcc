---
applyTo: "**/*.html"
---

# GitHub Copilot Instructions - HTML

## 🏗️ HTML5 Semântico

- Sempre use tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Evite `<div>` quando uma tag semântica é apropriada
- Use `<header>` para cabeçalhos, `<footer>` para rodapés
- Use `<section>` para agrupar conteúdo relacionado
- Use `<article>` para conteúdo independente e reutilizável

## ♿ Acessibilidade

### Atributos `alt` em Imagens

- **Obrigatório**: Toda imagem `<img>` deve ter um atributo `alt` descritivo
- **Decorativas**: Se a imagem for puramente decorativa, use `alt=""` (vazio)
- **Conteúdo**: Descreva o significado, não apenas "imagem de..."

```html
<!-- ✅ Bom -->
<img src="logo.png" alt="Logo TCC Design Digital">

<!-- ✅ Bom (decorativa) -->
<img src="separator.png" alt="" aria-hidden="true">

<!-- ❌ Ruim -->
<img src="logo.png" alt="imagem">
```

### Headings (Títulos)

- Comece com `<h1>` (um por página)
- Siga hierarquia: h1 → h2 → h3 → h4
- **Nunca pule níveis** (ex: h1 → h3 é inválido)
- Use headings para estrutura, não apenas para estilo

```html
<!-- ✅ Bom -->
<h1>Título Principal da Página</h1>
<h2>Seção Principal</h2>
<h3>Subseção</h3>

<!-- ❌ Ruim -->
<h1>Título</h1>
<h3>Pulou h2</h3>
```

### Formulários

- Toda `<input>` deve ter uma `<label>` associada
- Use o atributo `for` na label e `id` no input
- Adicione `aria-describedby` para mensagens de erro/ajuda
- Use `aria-required="true"` em campos obrigatórios

```html
<!-- ✅ Bom -->
<label for="email">Email</label>
<input type="email" id="email" name="email" required>

<!-- ✅ Com descrição -->
<label for="senha">Senha</label>
<input type="password" id="senha" aria-describedby="senha-help">
<small id="senha-help">Mínimo 8 caracteres</small>
```

## 📱 Bootstrap 5 e Responsividade

### Grid System

- Use `<div class="container">` para conteúdo com largura máxima
- Use `<div class="container-fluid">` para conteúdo 100% de largura
- Combine `row` e `col-*` para layouts responsivos

```html
<!-- ✅ Responsivo -->
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Coluna</div>
    <div class="col-12 col-md-6 col-lg-4">Coluna</div>
    <div class="col-12 col-md-12 col-lg-4">Coluna</div>
  </div>
</div>
```

### Classes Bootstrap

- Prefira classes utilitárias do Bootstrap antes de CSS customizado
- Use `d-none`, `d-md-block` para visibilidade responsiva
- Use `text-center`, `text-md-start` para alinhamento
- Use `mt-3`, `mb-4`, `px-2` para espaçamento

### Componentes Bootstrap

- Navbar: Use `navbar`, `navbar-expand-lg`, `navbar-collapse`
- Cards: Use `card`, `card-img-top`, `card-body`
- Buttons: Use `btn`, `btn-primary`, `btn-lg`, etc.
- Forms: Use `form-control`, `form-label`, `mb-3`

## 🔧 Boas Práticas de Markup

### Estrutura Base

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título Descritivo da Página</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- CSS Customizado -->
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <!-- Conteúdo aqui -->
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Scripts Customizados -->
    <script src="assets/js/script.js"></script>
</body>
</html>
```

### Atributos Importantes

- **lang**: Sempre defina o atributo `lang` no `<html>` (ex: `lang="pt-BR"`)
- **viewport**: Obrigatório para responsividade: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **title**: Descritivo e único para cada página

## 📐 Organização do Markup

- Indentação com 2 espaços ou 4 espaços (consistente)
- Quebras de linha entre seções principais
- Agrupe elementos relacionados em containers semânticos
- Use comentários HTML para separar grandes seções

```html
<!-- ========== NAVBAR ========== -->
<nav class="navbar">...</nav>

<!-- ========== MAIN CONTENT ========== -->
<main>
  <section>...</section>
  <section>...</section>
</main>

<!-- ========== FOOTER ========== -->
<footer>...</footer>
```

## ⚠️ Evite

- Atributos inline de estilo (`style="..."`)
- Classes sem semântica (ex: `class="red-text"` ao invés de `class="error"`)
- Imagens sem `alt`
- Nesting excessivo (max 4-5 níveis)
- Usar `<div>` quando uma tag semântica faz mais sentido
