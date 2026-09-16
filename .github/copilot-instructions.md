# GitHub Copilot Instructions - TCC Design Digital

## 📋 Contexto do Projeto

Este repositório é um template educacional para alunos do 3º ano de Design Digital, demonstrando boas práticas em desenvolvimento web responsivo, acessibilidade e padrões modernos.

## 🎯 Público-Alvo

Alunos de Design Digital (3º ano) - em desenvolvimento de projetos web profissionais.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com variáveis CSS
- **Bootstrap 5** - Framework CSS responsivo
- **JavaScript** - Interatividade quando necessário

## 📱 Abordagem de Design

- **Mobile-first**: Começar sempre pelo mobile (320px+)
- **Responsivo**: Adaptar para tablets (768px+) e desktops (1024px+)
- **Acessível**: Seguir padrões WCAG AA (contraste 4.5:1, navegação por teclado, ARIA)

## 📝 Convenções Gerais de Código

- Use nomes descritivos e em português para classes/IDs de contexto do projeto
- Mantenha código limpo, legível e bem documentado
- Siga a estrutura de pastas estabelecida em `structure.instructions.md`
- Comente código complexo ou não-óbvio
- Use nomenclatura consistente (snake_case para CSS, camelCase para JavaScript)

## 💬 Idioma

- **Código e comentários**: Português (pt-BR)
- **Documentação**: Português (pt-BR)
- **Classes/IDs HTML**: Português ou Inglês técnico, conforme context

## 🏗️ Organização do Projeto

```
tcc/
├── .github/
│   ├── copilot-instructions.md       # Estas instruções
│   └── instructions/                  # Instruções específicas por tecnologia
├── Index.html                         # Página principal
├── assets/
│   ├── css/                          # Estilos
│   ├── js/                           # Scripts
│   └── img/                          # Imagens
├── pages/                            # Páginas adicionais
└── docs/                             # Documentação
```

## ✨ Princípios de Desenvolvimento

1. **Semântica**: Use tags HTML semânticas (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
2. **Acessibilidade**: Atributos `alt` em imagens, labels em formulários, contraste adequado
3. **Performance**: CSS/JS otimizado, imagens comprimidas
4. **Manutenibilidade**: Código modular, DRY (Don't Repeat Yourself)
5. **Bootstrap First**: Aproveite utilities do Bootstrap antes de CSS customizado

## 📚 Recursos Úteis

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [GitHub Copilot Instructions](https://docs.github.com/en/copilot/concepts/prompting/response-customization)

---

Para instruções específicas por tipo de arquivo (HTML, CSS, JavaScript), consulte `.github/instructions/`.
