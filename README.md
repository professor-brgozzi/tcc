# TCC - Design Digital 3º Ano

Exemplo de Trabalho de Conclusão de Curso para alunos de Design Digital, demonstrando boas práticas em design responsivo e desenvolvimento web.

## 📋 Sobre o Projeto

Este projeto serve como template e referência para alunos do 3º ano de Design Digital, mostrando como estruturar um projeto web profissional usando Inteligencia artificial com:

- ✅ Design responsivo (mobile-first)
- ✅ Acessibilidade
- ✅ Boas práticas HTML/CSS
- ✅ Componentes reutilizáveis
- ✅ Documentação clara

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com Bootstrap 5
- **Bootstrap 5** - Framework CSS responsivo
- **JavaScript** - Interatividade (quando necessário)

## 📱 Responsividade

O projeto utiliza o Bootstrap 5 com a abordagem **mobile-first**, garantindo que a experiência seja otimizada para:

- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

### Breakpoints do Bootstrap 5

| Dispositivo | Tamanho | Classe Bootstrap |
|-----------|---------|------------------|
| Mobile | < 576px | `.d-none .d-sm-block` |
| Tablet | ≥ 576px | `sm` |
| Desktop | ≥ 768px | `md` |
| Desktop Médio | ≥ 992px | `lg` |
| Desktop Grande | ≥ 1200px | `xl` |
| Ultra Wide | ≥ 1400px | `xxl` |

## 📁 Estrutura do Projeto

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

## 📚 Bootstrap - Links Úteis
- [Bootstrap 6 Docs](https://getbootstrap.com/docs/6.0/guides/quickstart/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [GitHub Copilot Instructions](https://docs.github.com/en/copilot/concepts/prompting/response-customization)

### Usar o template Bootstrap via CDN

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

## ✅ Checklist para Desenvolvimento

- [ ] Página é responsiva em todos os breakpoints
- [ ] Todos os links funcionam
- [ ] Formulários têm validação
- [ ] Imagens têm atributo `alt`
- [ ] Contraste de cores atende WCAG AA
- [ ] Testado em navegadores principais


## Para rodar o projeto:

Abra o terminal, cole o comando abaixo e dê `Enter`

```
cd src
python3 -m http.server 8000
```

## 📄 Licença

Este projeto é um exemplo educacional para alunos de Design Digital.
