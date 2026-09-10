---
applyTo: "**/*.css"
---

# GitHub Copilot Instructions - CSS

## 🎨 CSS Organizado

- Organize propriedades em ordem lógica:
  1. Positioning (position, top, left, z-index)
  2. Box model (display, width, height, margin, padding, border)
  3. Typographic (font-size, font-weight, line-height, color)
  4. Visual (background, opacity, box-shadow)
  5. Animation (transform, transition, animation)

```css
/* ✅ Bom - Ordem lógica */
.card {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 0 1rem 0;
  padding: 1.5rem;
  border: 1px solid #ddd;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
}
```

## 🔧 Uso Adequado do Bootstrap

### Utilizar Primeiro

- Prefira classes utilitárias do Bootstrap: `mt-3`, `mb-4`, `p-2`, `text-center`
- Use grid system: `row`, `col-12`, `col-md-6`, `col-lg-4`
- Use componentes prontos: `btn`, `btn-primary`, `card`, `navbar`
- Use utilities de visibilidade: `d-none`, `d-md-block`

### CSS Customizado

- **Somente quando** Bootstrap não oferece solução pronta
- Para cores customizadas, gradientes, animações específicas
- Para componentes únicos do projeto

```css
/* ✅ Bom - Bootstrap utilities no HTML, CSS para customização específica */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 2rem;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ❌ Ruim - Replicando funcionalidade do Bootstrap */
.margin-top {
  margin-top: 1rem;
}

.text-center {
  text-align: center;
}
```

## 🎯 Variáveis CSS

- Use variáveis CSS (custom properties) para valores reutilizáveis
- Defina variáveis no escopo `:root` ou em seletores específicos
- Nomes descritivos: `--primary-color`, `--spacing-base`, `--transition-default`

```css
/* ✅ Bom - Variáveis reutilizáveis */
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --spacing-base: 1rem;
  --spacing-lg: 2rem;
  --border-radius: 4px;
  --transition-default: 0.3s ease;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-base);
  border-radius: var(--border-radius);
  transition: all var(--transition-default);
}
```

## 📱 Responsividade com Media Queries

### Mobile-First

- **Sempre**: Base para mobile (320px+)
- **Depois**: Media queries para breakpoints maiores

```css
/* ✅ Mobile-first */
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```

### Breakpoints (Bootstrap 5)

- **sm**: 576px
- **md**: 768px
- **lg**: 992px
- **xl**: 1200px
- **xxl**: 1400px

```css
/* Mobile por padrão */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet e acima */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop e acima */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 📛 Nomenclatura de Classes

- Use **kebab-case** (hífens): `.my-component`, `.card-header`, `.button-primary`
- Nomes **descritivos**: `.hero-section`, não `.big-blue-box`
- Prefixos **semânticos**: `.card-title`, `.button-group`, `.form-control`
- Evite nomes específicos de estilo: `.red`, `.bold`, `.large`

```css
/* ✅ Bom */
.hero-section { }
.card-title { }
.button-primary { }
.form-control-group { }

/* ❌ Ruim */
.big-blue-section { }
.title { }
.primary { }
.input-wrapper { }
```

## 🚫 Evitar Duplicação

- **DRY**: Don't Repeat Yourself
- Agrupe seletores comuns
- Use classes reutilizáveis

```css
/* ✅ Bom - Agrupado */
.card-title,
.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-title {
  color: #333;
}

.section-title {
  color: #667eea;
}

/* ❌ Ruim - Duplicado */
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #667eea;
}
```

## 🔄 Manutenção

### Estrutura de Arquivo

```css
/* ========== VARIÁVEIS ========== */
:root {
  /* cores, espaçamento, etc */
}

/* ========== RESET / BASE ========== */
* { }
body { }
html { }

/* ========== LAYOUT ========== */
.container { }
.hero-section { }

/* ========== COMPONENTES ========== */
.card { }
.button { }
.form-control { }

/* ========== UTILITIES ========== */
.text-center { }
.mb-1 { }

/* ========== MEDIA QUERIES ========== */
@media (min-width: 768px) { }
```

### Comentários

- Organize seções com comentários claros
- Explique CSS não-óbvio
- Use comentários em bloco para separar grandes seções

```css
/* ========== HERO SECTION ========== */
.hero-section {
  /* Gradiente customizado do projeto */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## ⚠️ Evite

- `!important` (exceto casos extremos)
- IDs como seletores (use classes)
- Propriedades inline de estilo em HTML
- Valores "mágicos" sem variáveis
- Nesting excessivo
- Especificidade alta desnecessária

```css
/* ❌ Ruim - !important */
.button { color: red !important; }

/* ❌ Ruim - ID */
#header { }

/* ❌ Ruim - Valores "mágicos" */
margin: 47px; /* Por que 47? */

/* ✅ Bom */
.button { color: red; }
.header { }
margin: var(--spacing-lg);
```
