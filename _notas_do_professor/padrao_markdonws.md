# Como montar sua estrutura de contexto


| Arquivo                   | Conteúdo                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------- |
| `copilot-instructions.md` | Regras de desenvolvimento, tecnologias, padrões de código e orientações para o Copilot |
| `REQUISITOS.md`           | Objetivo do sistema, área de atuação, público-alvo e regras de negócio                 |
| `DESIGN_SYSTEM.md`        | Paleta de cores, tipografia, estilo visual, botões, cards e outros componentes         |
| `LAYOUTS.md`              | Estrutura visual das páginas e posicionamento dos elementos                            |
| `README.md`               | Apresentação do projeto e instruções para executá-lo                                   |



---
## 1. copilot-instructions.md:

O que faz:
Explica ao Copilot como trabalhar. São as regras que o Copilot deve seguir ao desenvolver e modificar o sistema, incluindo referências aos documentos que descrevem a parte visual.

**IMPORTANTE**
Não existe um único arquivo padrão obrigatório do GitHub Copilot.
Entretanto essa estrutura atende o que pede o TCC.


## 2. REQUISITOS.md
Exemplo:
```
### 1. Visão geral

### Nome do sistema
[Nome do projeto]

### 2. Identidade do sistema
- Área de atuação: [descrever]
- Público-alvo: [descrever]
- Personalidade da marca: [ex.: moderna, minimalista, institucional]
- Referências visuais: [sites ou projetos de referência]

Exemplo: Educação, comércio eletrônico, saúde, entretenimento ou gestão empresarial.

#### Descrição do site
[Explique, em um ou dois parágrafos, o que é o site e o que ele oferece.]

#### Objetivo principal
[Descreva o principal problema que o site pretende resolver.]

---

### 2. Público-alvo

#### Usuários principais
[Descreva quem utilizará o sistema.]

#### Necessidades dos usuários
- [Necessidade 1]
- [Necessidade 2]
- [Necessidade 3]

#### Nível de familiaridade com tecnologia
[Descreva se os usuários são iniciantes, intermediários ou avançados.]

---

## 3. Estrutura de navegação

### Páginas principais
- Página inicial: [Objetivo da página.]
- Página de consulta: [Objetivo da página.]
- Página de detalhes: [Objetivo da página.]
- Página de contato: [Objetivo da página.]

---

## 4. Critérios de aceitação

Uma funcionalidade/pagina será considerada concluída quando:
- Não comprometer funcionalidades/paginas existentes.
- Respeitar o DESIGN_SYSTEM.md.
- Respeitar os layouts definidos em LAYOUTS.md.
```

## 2. DESIGN_SYSTEM.md

Exemplo:

```

# Design System

## 1. Estilo visual
- Estilo predominante: [ex.: minimalista]
- Densidade visual: [baixa, média ou alta]
- Uso de espaços em branco: [descrever] (se necessário)
- Tratamento de imagens: [descrever] (se necessário)
- Estilo dos ícones: [descrever]
- Referencia visual (colocar um png de exemplo)

## 2. Paleta de cores
- Cor principal: [nome e código HEX]
- Cor secundária: [nome e código HEX]
- Cor de destaque: [nome e código HEX]
- Cor de fundo: [nome e código HEX]
- Cor dos textos: [nome e código HEX]

## 4. Tipografia
- Fonte dos títulos: [fonte]
- Fonte dos textos: [fonte]
- Hierarquia dos tamanhos: [descrever]
- Peso das fontes: [descrever]

## 5. Elementos gráficos (colocar mais de um se necessário)
### Botões
- Formato:
- Cores:
- Altura e espaçamento:
- Estados: normal, hover, foco e desabilitado.
- Referencia visual (colocar um png de exemplo)

### Cards
- Formato:
- Bordas e sombras:
- Espaçamento interno:
- Organização do conteúdo:
- Comportamento em telas pequenas:
- Referencia visual (colocar um png de exemplo)

### Navegação
- Posição do menu:
- Organização dos itens:
- Referencia visual (colocar um png de exemplo)

## 6. Responsividade 
- Comportamento em desktop:
- Comportamento em tablets:
- Comportamento em celulares:

```

## 3. LAYOUTS.md

Exemplo:

```

# Layouts do sistema

## Página inicial

### 1. Cabeçalho
- Ocupa toda a largura da página.
- Logotipo alinhado à esquerda.
- Menu de navegação à direita.
- Em telas pequenas, o menu deve ser recolhido.
OU uma referencia visual 

### 2. Banner principal
- Ocupa a largura disponível do conteúdo.
- Imagem como elemento visual predominante.
- Título alinhado à esquerda.
- Texto de apoio abaixo do título.
- Botão de ação abaixo do texto.
OU uma referencia visual

### 3. Seção de cards
- Três colunas em telas grandes.
- Duas colunas em telas intermediárias.
- Uma coluna em celulares.
- Cards com dimensões e espaçamentos consistentes.
OU uma referencia visual

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

```

## Estutura

```
meu-projeto/
│
├── .github/
│   └── copilot-instructions.md
│
├── docs/
│   ├── REQUISITOS.md
│   ├── DESIGN_SYSTEM.md
│   └── LAYOUTS.md
│
└── README.md

```

Importante: mencionar os documentos nas instruções não garante que toda ferramenta ou modo do Copilot carregará automaticamente o conteúdo integral deles. Essa regra serve para orientar o agente a consultá-los; você deve verificar se ele realmente leu os arquivos antes de tarefas importantes.

## Revisão final
- Requisitos: o que o sistema faz e para quem.
- Design system: como o sistema deve parecer.
- Layouts: como cada tela deve ser organizada.
- Copilot instructions: como o agente deve trabalhar e quais documentos deve consultar.

Assim, quando você pedir ao Copilot para criar uma nova página, não precisará explicar novamente toda a identidade visual e as regras do sistema em cada solicitação.