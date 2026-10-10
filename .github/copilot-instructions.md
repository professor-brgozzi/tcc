# GitHub Copilot Instructions - TCC Design Digital

## Contexto do Projeto
Este é site da empresa [NOME_DO_TCC] com o objetivo de apresentar um site funcional e navegavel em html usando o framework Bootstrap.

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
- **Classes/IDs HTML**: Português ou Inglês técnico, conforme context

## Organização do Projeto

```
projeto/
├── .github/
│   └── copilot-instructions.md       => Estas instruções
├── docs/
│   ├── REQUISITOS.md                 => Descrição dos requisitos do sistema 
│   ├── DESIGN_SYSTEM.md.             => Definição de design system
│   └── LAYOUT.md                     => Instruções dos Layouts das páginas
│
├── Index.html                        => Página principal
├── assets/
│   ├── css/                          => Estilos
│   ├── js/                           => Scripts
│   └── img/                          => Imagens
└── pages/                            => Páginas internas
```

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

## Documentação
Antes de implementar ou modificar interfaces:
- Consulte docs/REQUISITOS.md.
- Consulte docs/DESIGN_SYSTEM.md.
- Consulte docs/LAYOUTS.md.

## Padrões visuais
- Respeite a paleta de cores documentada.
- Reutilize os componentes existentes.
- Mantenha consistência entre as páginas.
- Não invente padrões visuais quando já houver uma definição documentada.

## Restrições
- NÃO INSTALE PACOTES (NPM)
- NÃO USE LINGUAGENS DE PROGRAMAÇÃO BACKEND

