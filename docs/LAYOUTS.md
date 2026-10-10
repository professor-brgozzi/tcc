
# Layouts do sistema

## Página inicial
Referencia visual (`docs\MODELOS\pagina-inicial.png`)

### 1. Cabeçalho
- Ocupa toda a largura da página.
- Em telas pequenas, o menu deve ser recolhido.
Referencia visual (`docs\MODELOS\cabecalho.png`)

### 2. Banner principal
- Ocupa a largura disponível do conteúdo.
Referencia visual (`docs\MODELOS\Banner.png`)

### 3. Cards
Referencia visual (`docs\MODELOS\card.png`)

```

## 4. Como fazer o Copilot respeitar esses documentos:

No arquivo `.github/copilot-instructions.md`, inclua uma regra explícita:

```

## Documentação de referência

Antes de criar ou modificar interfaces:

1. Consulte `docs/REQUISITOS.md` para entender o negócio.
2. Consulte `docs/DESIGN_SYSTEM.md` para respeitar a identidade visual.
3. Consulte `docs/LAYOUTS.md` para compreender a organização das telas.
4. Se houver conflito entre a implementação existente e os documentos, informe o conflito antes de fazer alterações relevantes.
5. Não invente cores, componentes ou padrões visuais quando já houver uma definição documentada.
6. Ao implementar uma nova tela, mantenha consistência com as telas existentes.
7. SEMPRE pergunte se houver dúvida ou situação de ambiguidade.