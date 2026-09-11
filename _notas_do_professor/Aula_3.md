# E agora ? Como pedir uma tarefa para a IA
Conceito: Uso de Prompt reutilizável

Já vimos que na nossa "super estrutura" criamos esse Micro-eco-sistema dividido em:

Regra: (instructions.md)
Ex: "O projeto utiliza Bootstrap 5."

Referência: ( tudo que fica em /docs)
Ex: "Esta é a identidade visual do projeto."

Tarefa: (xpto.prompt.pd)
Ex: "Crie a página Interna com a estrutura tal de acordo com a referencia tal"

Mas e agora? pode começar ?

Sim!
Agora com tudo pré-definido e fundamentado, da pra começar a fazer! Com a diferença que daremos instruções mais simples pois temos o entendimento e contexto.

Devo abrir o chat e pedir o que quero?? Não!! rsrs

Essa é a técnica:
Divida o que vc quer em 2 tipos de prompts. Vamos chama-los de "o reaproveitavel" e "o prompt de instrução imediata". 

## Vamos pra prática?

Comece com "o reaproveitavel":
Faça um exercicio mental de imaginar quais padrões (tipos) de página/componente seu projeto vai ter:

Por exemplo:
- Pagina Texto + imagem grande (Paginas "história", "Quem somos" podem ser desse tipo)
- Pagina Interna de grade de cards (Paginas de "Departamento" ou "Portifolio" podem ser desse tipo)
- Landing Page (Pagina Home pode ser desse tipo, ou uma pagina de lançamento de produto)
- Card (Pode ser usado em lista de noticias, lista de produtos, lista de marcas, lista de posts...)

Estes arquivos de instrução devem ficar dentro de "prompts". Ficaria algo como:

```text
- pagina-texto-imagem.prompt.md
- pagina-grade-cards.prompt.md
- pagina-landing.prompt.md
- card.prompt.md
```

Agora, depois disso feito, vá para "o prompt de instrução imediata"!

Com toda essa estrutura montada, abra um novo chat e digite:

Crie uma pagina do tipo grade de cards (#file:pagina-grade-cards.prompt.md) com a estrutura de 12 cards (#file:card.prompt.md). Essa pagina deve ter as configurações abaixo:
- Titulo: Roupas Femininas
- Espaço para banner TV: (utilize a imagem assets/img/moda_feminina.jpg)