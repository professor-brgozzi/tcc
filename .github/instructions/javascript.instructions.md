---
applyTo: "**/*.js"
---

# GitHub Copilot Instructions - JavaScript

## 📝 JavaScript Moderno

- Use `const` por padrão, `let` quando necessário reatribuir, evite `var`
- Use arrow functions `=>` em callbacks e operações simples
- Prefira métodos modernos: `map()`, `filter()`, `reduce()` ao invés de loops
- Use template literals `` `texto ${variavel}` ``

```javascript
// ✅ Bom - Moderno
const usuarios = [{ nome: 'João' }, { nome: 'Maria' }];
const nomes = usuarios.map(u => u.nome);
const mensagem = `Olá, ${nomes.join(' e ')}`;

// ❌ Ruim - Antigo
var usuarios = [{ nome: 'João' }, { nome: 'Maria' }];
var nomes = [];
for (var i = 0; i < usuarios.length; i++) {
  nomes.push(usuarios[i].nome);
}
var mensagem = 'Olá, ' + nomes.join(' e ');
```

## 📖 Código Simples e Legível

- **Funções pequenas**: Uma responsabilidade por função (Single Responsibility Principle)
- **Máximo 20 linhas** por função (idealmente)
- **Quebra de linhas**: Uma statement por linha
- **Sem lógica complexa**: Se é difícil de entender, refatore

```javascript
// ✅ Bom - Funções pequenas e claras
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function exibirErro(mensagem) {
  const elemento = document.getElementById('erro');
  elemento.textContent = mensagem;
  elemento.classList.remove('d-none');
}

function tratarEnvioFormulario(evento) {
  evento.preventDefault();
  const email = document.getElementById('email').value;
  
  if (!validarEmail(email)) {
    exibirErro('Email inválido');
    return;
  }
  
  enviarFormulario();
}

// ❌ Ruim - Função grande e complexa
function validarEEnviar(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!regex.test(email)) {
    const elemento = document.getElementById('erro');
    elemento.textContent = 'Email inválido';
    elemento.classList.remove('d-none');
    return;
  }
  
  // ... mais 20 linhas de código...
}
```

## 📛 Nomes Descritivos

- Variáveis: **nomes claros** do que contêm
- Funções: **verbos** que descrevem ação (`obter`, `validar`, `exibir`)
- Constantes: **MAIÚSCULAS** para valores que nunca mudam

```javascript
// ✅ Bom - Nomes descritivos
const TIMEOUT_PADRAO = 5000;
let contadorTentativas = 0;

function obterDadosUsuario(usuarioId) { }
function validarFormulario(formulario) { }
function exibirNotificacao(mensagem) { }

// ❌ Ruim - Nomes genéricos
const tempo = 5000;
let cont = 0;

function get(id) { }
function val(form) { }
function show(msg) { }
```

## 🎯 Manipulação Segura do DOM

### Seletores

- Prefira `querySelector()` e `querySelectorAll()` (moderno)
- Use IDs para elementos únicos: `getElementById()`
- Use classes para múltiplos elementos: `getElementsByClassName()` ou `querySelectorAll()`

```javascript
// ✅ Bom
const botao = document.querySelector('#enviar-botao');
const campos = document.querySelectorAll('.form-control');
const titulo = document.getElementById('titulo-principal');

// ❌ Evitar
const botao = document.getElementsByTagName('button')[0];
```

### Modificação de DOM

- Use `textContent` para texto (evita HTML parsing)
- Use `innerHTML` **somente** quando necessário inserir HTML
- Sempre sanitize dados de entrada antes de inserir no DOM

```javascript
// ✅ Bom - Seguro
const elemento = document.querySelector('.mensagem');
elemento.textContent = `Olá, ${nomeusuario}`; // Seguro

// ✅ Sanitizar antes
function sanitizarHTML(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

// ❌ Ruim - XSS vulnerável
elemento.innerHTML = `<p>Olá, ${nomeUsuario}</p>`; // Se nomeUsuario vem de input, é perigoso
```

### Event Listeners

- Use `addEventListener()`, não atributos inline (`onclick=`)
- Organize listeners em funções ou métodos
- Remova listeners quando não necessários (`removeEventListener()`)

```javascript
// ✅ Bom
const botao = document.querySelector('#enviar');
botao.addEventListener('click', tratarEnvio);

function tratarEnvio(evento) {
  evento.preventDefault();
  // lógica aqui
}

// ❌ Ruim - Inline
<button onclick="tratarEnvio()">Enviar</button>
```

## 🚫 Evitar Duplicação

- **DRY**: Don't Repeat Yourself
- Extraia código comum em funções
- Use loops para operações repetidas

```javascript
// ✅ Bom - Reutilizável
function adicionarClasse(seletor, classe) {
  document.querySelectorAll(seletor).forEach(el => {
    el.classList.add(classe);
  });
}

adicionarClasse('.card', 'ativo');
adicionarClasse('.card', 'com-sombra');

// ❌ Ruim - Duplicado
document.querySelectorAll('.card').forEach(el => {
  el.classList.add('ativo');
});

document.querySelectorAll('.card').forEach(el => {
  el.classList.add('com-sombra');
});
```

## ⚠️ Tratamento de Erros

- Use `try/catch` para operações que podem falhar
- Sempre valide dados de entrada
- Forneça feedback ao usuário em caso de erro

```javascript
// ✅ Bom - Com tratamento
async function buscarDados(url) {
  try {
    if (!url || typeof url !== 'string') {
      throw new Error('URL inválida');
    }
    
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error(`HTTP ${resposta.status}`);
    }
    
    return await resposta.json();
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro);
    exibirNotificacao('Erro ao carregar dados');
  }
}

// ❌ Ruim - Sem validação
async function buscarDados(url) {
  const resposta = await fetch(url);
  return await resposta.json();
}
```

## 🔗 Integração com Bootstrap JavaScript

### Componentes Bootstrap com JS

```javascript
// Inicializar tooltip
const tooltip = new bootstrap.Tooltip(document.querySelector('.tooltip-elemento'));

// Mostrar modal
const modal = new bootstrap.Modal(document.getElementById('meuModal'));
modal.show();

// Collapse
const collapse = new bootstrap.Collapse(document.getElementById('collapseId'), {
  toggle: true
});
```

### Data Attributes

- Use `data-*` attributes do Bootstrap para funcionalidade

```html
<!-- HTML -->
<button data-bs-toggle="collapse" data-bs-target="#menu">Menu</button>
<div id="menu" class="collapse">Conteúdo</div>

<!-- JavaScript complementar (se necessário) -->
<script>
  document.addEventListener('shown.bs.collapse', (e) => {
    console.log('Menu aberto');
  });
</script>
```

## 📚 Estrutura de Arquivo

```javascript
// ========== CONSTANTES ==========
const TIMEOUT = 5000;
const URLS = {
  API: '/api',
  HOME: '/'
};

// ========== FUNÇÕES UTILITÁRIAS ==========
function sanitizarTexto(texto) { }
function validarEmail(email) { }

// ========== MANIPULAÇÃO DO DOM ==========
function inicializarEventos() { }
function configurarFormulario() { }

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
  inicializarEventos();
  configurarFormulario();
});
```

## ✨ Boas Práticas Gerais

- **Comentários úteis**: Explique o "porquê", não o "quê"
- **Sem console.log permanente**: Remova ou use devTools
- **Async/await**: Prefira a `Promise` para operações assíncronas
- **Validação**: Sempre valide dados antes de usar
- **Testes mentais**: Pense em casos extremos (valores vazios, nulos, etc)

```javascript
// ✅ Comentário útil
function aplicarDesconto(preco, desconto) {
  // Desconto é aplicado antes de arredondamento para evitar erros de centavo
  const precoComDesconto = preco * (1 - desconto / 100);
  return Math.round(precoComDesconto * 100) / 100;
}

// ❌ Comentário inútil
function aplicarDesconto(preco, desconto) {
  // Aplica desconto
  const precoComDesconto = preco * (1 - desconto / 100);
  // Arredonda
  return Math.round(precoComDesconto * 100) / 100;
}
```

## ⚠️ Evite

- Variáveis globais (escopo mínimo)
- `eval()` em qualquer circunstância
- Callbacks aninhados demais (prefira async/await)
- Modificar objetos globais (window, document)
- Métodos síncronos de rede (fetch/XMLHttpRequest)
