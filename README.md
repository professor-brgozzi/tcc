# TCC - Design Digital 3º Ano

Exemplo de Trabalho de Conclusão de Curso para alunos de Design Digital, demonstrando boas práticas em design responsivo e desenvolvimento web.

## 📋 Sobre o Projeto

Este projeto serve como template e referência para alunos do 3º ano de Design Digital, mostrando como estruturar um projeto web profissional com:

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
tcc/
├── Index.html                 # Página principal
├── README.md                  # Este arquivo
├── GUIA_DESENVOLVIMENTO.md   # Guia para desenvolvimento
├── DICAS_COPILOT.md          # Como usar Copilot
├── .copilot.yml              # Configuração do Copilot
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos customizados
│   ├── js/
│   │   └── script.js         # Scripts JavaScript
│   └── img/
│       └── (imagens do projeto)
└── pages/
    ├── sobre.html
    ├── projetos.html
    └── contato.html
```

## 🚀 Como Usar Este Projeto

### 1. **Clonar o Repositório**
```bash
git clone https://github.com/professor-brgozzi/tcc.git
cd tcc
```

### 2. **Abrir no Navegador**
Simplesmente abra o arquivo `Index.html` no seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server
```

Acesse: `http://localhost:8000`

### 3. **Editar o Projeto**
Use seu editor de código favorito (VS Code, Sublime, etc.) e edite os arquivos HTML/CSS.

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

## 🎨 Personalização

### Cores Principais
- Primária: `#667eea`
- Secundária: `#764ba2`
- Escura: `#2c3e50`
- Clara: `#f8f9fa`

### Fontes
- Fonte Padrão: Sistema (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, etc.)

## ✅ Checklist para Desenvolvimento

- [ ] Página é responsiva em todos os breakpoints
- [ ] Todos os links funcionam
- [ ] Formulários têm validação
- [ ] Imagens têm atributo `alt`
- [ ] Contraste de cores atende WCAG AA
- [ ] Testado em navegadores principais

## 📖 Como Usar o Copilot Neste Projeto

Este projeto foi configurado para trabalhar com GitHub Copilot. Use comandos como:

- `@copilot crie um componente de card responsivo`
- `@copilot adicione validação ao formulário`
- `@copilot melhore a acessibilidade desta página`
- `@copilot crie uma página sobre com 3 seções`

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato com `professor-brgozzi`.

## 📄 Licença

Este projeto é um exemplo educacional para alunos de Design Digital.

---

**Última atualização**: 10 de setembro de 2026
