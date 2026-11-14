# GitHub Copilot Instructions - TCC Design Digital

## Contexto do Projeto
Este é site da Etec Carlos de Campos com o objetivo de apresentar um site funcional e navegavel em html usando o framework Bootstrap.

**Importante**: Deve ser estritamente um modelo navegavel. 
- Não deve conter linguagem de programação Backend.
- Sem programação dinamica.
- Sem banco de dados.

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com variáveis CSS
- **Bootstrap 6** - Framework CSS responsivo
- **JavaScript** - Interatividade quando necessário

## Abordagem de Design

- **Mobile-first**: Começar sempre pelo mobile (320px+)
- **Responsivo**: Adaptar para tablets (768px+) e desktops (1024px+)
- **Acessível**: Seguir padrões WCAG AA (contraste 4.5:1, navegação por teclado, ARIA)

## Convenções Gerais de Código

- Use nomes descritivos e em português para classes/IDs de contexto do projeto
- Mantenha código limpo, legível e bem documentado
- Comente código complexo ou não-óbvio
- Use nomenclatura consistente (snake_case para CSS, camelCase para JavaScript)

## Idioma

- **Código e comentários**: Português (pt-BR)
- **Documentação**: Português (pt-BR)
- **Classes/IDs HTML**: Português ou Inglês técnico, conforme contexto

## Organização do Projeto

```
projeto/
  ├── .github/
  │   └── copilot-instructions.md       => Instruções
  ├── docs/
  │   └── modelos/
  └── src/
      ├── assets/
      │   ├── css/                          
      │   ├── js/                           
      │   └── images/
      ├── index.html    => Página principal
      ├── produto.html  => Página produto
      └── grid.html     => Página da grade
                                

```

## Estrutura obrigatória das páginas

Todas as páginas devem se enquadrar em uma estrutura dividida em 3 blocos: Cabeçalho, Conteudo e Rodapé.
Essa estutura é inegociável.
```html
<body>
<!-- inicio cabecalho >> [folha de estilos: assets/css/cabecalho_rodape.css] -->
<div class="container"> {html do cabecalho} </div>
<!-- fim cabecalho -->

<!-- inicio conteudo [folha de estilos: [assets/css/{nome_da_pagina}.css] -->
<div class="container"> {html do conteudo} </div>
<!-- fim conteudo -->

<!-- inicio rodape >> [folha de estilos: assets/css/cabecalho_rodape.css] -->
<div class="container"> {html do rodape} </div>
<!-- fim rodape -->
</body>
```

- **bloco `cabecalho`** : Usa estritamente folha de estilos `assets/css/cabecalho_rodape.css`
- **bloco `rodape`** : Usa estritamente folha de estilos `assets/css/cabecalho_rodape.css`
- **bloco `conteudo`** : Usa estritamente folha de estilos criada de acordo com seu nome `assets/css/{nome_da_pagina}.css`


### Base para iniciar
Use estritamente essa base para montar as páginas.

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{nome do site}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
  </head>
  <body>
    <!-- codigo html -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>
  </body>
</html>
```


> Por exemplo: `index.html` deve usar `assets/css/index.css`, `produto.html` deve usar `assets/css/produto.css`, e assim por diante. 

## Princípios de Desenvolvimento

1. **Semântica**: Use tags HTML semânticas (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
2. **Acessibilidade**: Atributos `alt` em imagens, labels em formulários, contraste adequado
3. **Performance**: CSS/JS otimizado, imagens comprimidas
4. **Manutenibilidade**: Código modular, DRY (Don't Repeat Yourself)
5. **Bootstrap First**: Aproveite utilities do Bootstrap antes de CSS customizado
6. **Libs Bootstrap**: Use os links da CDN (https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.)

## Recursos Úteis

- [Bootstrap 6 Docs](https://getbootstrap.com/docs/6.0/guides/quickstart/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [GitHub Copilot Instructions](https://docs.github.com/en/copilot/concepts/prompting/response-customization)


## Padrões visuais
- Respeite a paleta de cores documentada.
- Reutilize os componentes existentes.
- Mantenha consistência entre as páginas.
- Não invente padrões visuais quando já houver uma definição documentada.

## Restrições
- NÃO INSTALE PACOTES (NPM)
- NÃO USE LINGUAGENS DE PROGRAMAÇÃO BACKEND
- NÃO USE FRAMEWORKS DE FRONTEND (REACT, ANGULAR ETC)
