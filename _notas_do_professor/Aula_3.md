# E agora ? Como pedir uma tarefa para a IA
Conceito: Uso de Prompt reutilizável
 
Já vimos que na nossa "super estrutura" criamos esse Micro-eco-sistema dividido em:
 
Regra: (instructions.md)
Ex: "O projeto utiliza Bootstrap 5."
 
Referência: ( tudo que fica em /docs)
Ex: "Esta é a identidade visual do projeto."
 
Tarefa: (xpto.prompt.md)
Ex: "Crie a página Interna com a estrutura tal de acordo com a referencia tal"
 
Mas e agora? pode começar ?
 
Sim!
Agora com tudo pré-definido e fundamentado, da pra começar a fazer! Com a diferença que daremos instruções mais simples pois temos o entendimento e contexto.
 
Devo abrir o chat e pedir o que quero?? Não!! rsrs
 
A partir de agora você vai racionalizar tudo que vai pedir sobre o seu projeto, parece cansativo, mas acredite! com o tempo faz muito sentido.
Essa é a técnica:
Divida o que vc quer em 2 tipos de prompts. Vamos chama-los de "o reaproveitavel" e "o prompt de instrução imediata". 
 
No Reaproveivavel, vc descreve algo como "o conceito do que quer" e no de instrução imediata vc faz o "pedido final" 
 
Para entender melhor:
 
Tipo: "o reaproveitavel":
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
 
Tipo: "o prompt de instrução imediata"!
Aqui é o que vc vai digitar no chat diretamente. É nesse ponto que vc indica o detalhe do que quer. Se for pra informar um texto, é aqui que vc vai mandar, se for pra indicar uma imagem, é aqui que vc vai dar o caminho dela...
 
Esse prompt não precisa ser salvo em nenhum arquivo — ele é digitado direto no chat, no momento em que você for pedir a página ou componente.
 
Por exemplo:
Crie uma pagina do tipo grade de cards (#file:pagina-grade-cards.prompt.md) com a estrutura de 12 cards (#file:card.prompt.md). Essa pagina deve ter as configurações abaixo:
- Titulo: Roupas Femininas
- Espaço para banner TV: (utilize a imagem assets/img/moda_feminina.jpg)
## Exercício
Crie um prompt do tipo reaproveitavel, descrevendo um tipo/padrão de página (não uma página específica) que vc entende que se encaixa no seu projeto. Salve na pasta prompts.
 
Depois crie uma instrução imediata usando esse prompt reaproveitavel e de mais informações para criar ela.
