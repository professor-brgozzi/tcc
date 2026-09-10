<!-- markdown-start -->
# 🤖 Dicas para Usar GitHub Copilot Neste Projeto

Este guia fornece exemplos de como usar GitHub Copilot para acelerar seu desenvolvimento no projeto TCC.

## 📋 Índice

1. [Começando com o Copilot](#começando)
2. [Comandos Úteis](#comandos)
3. [Exemplos Práticos](#exemplos)
4. [Boas Práticas](#boas-práticas)

## 🚀 Começando com o Copilot {#começando}

### Ativar o Copilot

1. Abra o GitHub Copilot Chat no VS Code (Ctrl+Shift+I ou Cmd+Shift+I)
2. Use `@copilot` para dirigir a IA
3. Seja específico com seus pedidos
4. Forneça contexto quando necessário

### Mencionar Arquivos

```
@copilot analise o arquivo Index.html e sugira melhorias de responsividade
```

### Mencionar Símbolos

```
@copilot crie uma função JavaScript para validar email
```

## 💡 Comandos Úteis {#comandos}

### Criar Componentes

```
@copilot crie um componente de navbar responsivo com Bootstrap 5
@copilot crie um card de projeto com imagem, título, descrição e botão
@copilot crie um formulário de contato com validação Bootstrap
```

### Responsividade

```
@copilot revise este código e garanta que seja responsivo para mobile, tablet e desktop
@copilot adicione classes Bootstrap para melhorar o layout mobile
@copilot use media queries para melhorar a experiência mobile
```

### Acessibilidade

```
@copilot revise este código para garantir acessibilidade WCAG AA
@copilot adicione atributos ARIA e labels adequados
@copilot melhore o contraste de cores deste design
```

### JavaScript

```
@copilot crie uma função para validar um formulário
@copilot adicione um smooth scroll para links internos
@copilot crie um componente de slider com Bootstrap Carousel
```

### Estilo e Design

```
@copilot crie uma paleta de cores harmoniosa para este projeto
@copilot adicione animações CSS sutis neste componente
@copilot melhore o visual desta seção com Bootstrap utilities
```

## 📝 Exemplos Práticos {#exemplos}

### Exemplo 1: Criar uma Seção Hero Responsiva

**Prompt:**
```
@copilot crie uma seção hero responsiva com:
- Imagem de fundo
- Título grande
- Subtítulo
- Botão CTA
- Funcione bem em mobile, tablet e desktop
- Use Bootstrap 5 e CSS personalizado
```

**Resultado esperado:**
```html
<section class="hero-section">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-6 text-center text-md-start">
        <h1 class="display-3 fw-bold mb-3">Título Principal</h1>
        <p class="lead mb-4">Subtítulo descritivo</p>
        <button class="btn btn-primary btn-lg">Explorar</button>
      </div>
    </div>
  </div>
</section>
```

### Exemplo 2: Grid de Projetos Responsivo

**Prompt:**
```
@copilot crie um grid de projetos responsivo:
- 1 coluna em mobile
- 2 colunas em tablet
- 3 colunas em desktop
- Cada projeto tem imagem, título, descrição e link
- Adicione efeito hover nos cards
```

**Uso:**
```
Copilot criará o HTML com classes Bootstrap row-cols-* e um CSS com efeitos hover.
```

### Exemplo 3: Validar Formulário

**Prompt:**
```
@copilot crie uma validação de formulário que:
- Valida email
- Valida campo nome (mínimo 3 caracteres)
- Valida mensagem (mínimo 10 caracteres)
- Mostra mensagens de erro
- Use Bootstrap form validation
```

### Exemplo 4: Melhorar Acessibilidade

**Prompt:**
```
@copilot revise este formulário para melhorar acessibilidade:
- Adicione labels adequados
- Melhore contraste de cores
- Adicione atributos aria-label onde necessário
- Certifique-se de navegação por teclado
```

## ✅ Boas Práticas {#boas-práticas}

### 1. Seja Específico

❌ **Ruim:**
```
crie um botão
```

✅ **Bom:**
```
@copilot crie um botão responsivo com Bootstrap 5 que:
- Tem fundo gradiente azul-roxo
- Muda de cor ao passar o mouse
- Funciona bem em mobile
```

### 2. Forneça Contexto

❌ **Ruim:**
```
@copilot faça isso responsivo
```

✅ **Bom:**
```
@copilot revise este layout para ser responsivo:
- Full width em mobile
- 2 colunas em tablet
- 3 colunas em desktop
- Use Bootstrap 5
```

### 3. Revise o Código

Sempre revise o código gerado pelo Copilot:
- ✅ Funciona corretamente?
- ✅ É acessível?
- ✅ É responsivo?
- ✅ Segue os padrões do projeto?

### 4. Itere e Refine

Se o resultado não for perfeito:
```
@copilot melhore o código anterior:
- Adicione mais responsividade
- Melhore os nomes das classes
- Adicione comentários
```

### 5. Use a Memória do Copilot

O Copilot lembra do contexto da conversa:
```
1. "crie um card"
2. "adicione mais cards em um grid"
3. "faça um efeito hover"
```

## 🎯 Fluxo de Trabalho Recomendado

1. **Planeje** - Descreva claramente o que quer
2. **Peça ao Copilot** - Use prompts específicos
3. **Revise** - Analise o código gerado
4. **Teste** - Verifique no navegador (F12)
5. **Refine** - Peça ajustes se necessário
6. **Commit** - Salve no Git

### Exemplo Completo de Fluxo

```
1. Prompt inicial:
   @copilot crie uma página de portfólio responsiva

2. Refining:
   @copilot adicione uma navbar no topo

3. More requests:
   @copilot crie uma seção de projetos com 6 projetos em grid
   @copilot faça o grid responsivo: 1 col mobile, 2 tablet, 3 desktop

4. Testing:
   - Abrir no navegador
   - F12 para DevTools
   - Testar em diferentes tamanhos

5. Final touches:
   @copilot adicione um footer com links
   @copilot melhore a acessibilidade
```

## 🔧 Atalhos Úteis no VS Code

| Atalho | Função |
|--------|--------|
| `Ctrl+Shift+I` | Abrir Copilot Chat |
| `Ctrl+L` | Limpar chat |
| `/` | Ver comandos disponíveis |
| `@` | Mencionar arquivos ou símbolos |
| `#` | Mencionar pull requests |

## 📚 Exemplos de Prompts por Situação

### Quando precisa de HTML estruturado

```
@copilot crie uma página com:
- Navbar responsiva
- Hero section
- Seção sobre
- Grid de projetos (3 colunas em desktop)
- Footer
Use Bootstrap 5 e faça responsivo para mobile
```

### Quando precisa de CSS customizado

```
@copilot crie estilos CSS para:
- Gradiente de cor de fundo
- Transições suaves ao passar mouse
- Animação de entrada dos elementos
- Responsividade com media queries
```

### Quando precisa de JavaScript

```
@copilot crie um script que:
- Valida um formulário
- Mostra erros em tempo real
- Desativa botão se há erros
- Envia dados via fetch
```

### Quando precisa de melhorias

```
@copilot analise este código e sugira:
- Melhorias de performance
- Melhor semântica HTML
- Melhora de acessibilidade
- Otimização para mobile
```

## 🎓 Aprendendo com Copilot

Você pode usar o Copilot para aprender:

```
@copilot explique como funciona o grid do Bootstrap
@copilot qual é a diferença entre display flex e grid?
@copilot quais são as boas práticas de responsividade?
@copilot como fazer um site acessível?
```

---

**Dica Final:** Combine Copilot com a documentação do Bootstrap e você terá uma poderosa combinação para aprender e desenvolver rápido! 🚀
