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
  │   └── MODELOS/
  └── src/
      ├── assets/
      │   ├── css/                          
      │   ├── js/                           
      │   └── images/
      ├── index.html    => Página principal
      ├── produto.html  => Página produto
      └── grid.html     => Página da grade
                                

```

## 📚 Bootstrap 5 - Links Úteis

- **Documentação Oficial**: https://getbootstrap.com/docs/5.3/
- **Componentes**: https://getbootstrap.com/docs/5.3/components/
- **Grid System**: https://getbootstrap.com/docs/5.3/layout/grid/
- **Utilities**: https://getbootstrap.com/docs/5.3/utilities/

### Importar Bootstrap via CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

## ✅ Checklist para Desenvolvimento

- [ ] Página é responsiva em todos os breakpoints
- [ ] Todos os links funcionam
- [ ] Formulários têm validação
- [ ] Imagens têm atributo `alt`
- [ ] Contraste de cores atende WCAG AA
- [ ] Testado em navegadores principais


## 📄 Licença

Este projeto é um exemplo educacional para alunos de Design Digital.
