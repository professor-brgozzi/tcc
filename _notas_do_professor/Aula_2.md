
# Como dar contexto para a IA sobre o seu projeto
Seja um bom comunicador!

Você já teve um amigo ou pessoa na sua vida que você nem precisa falar até o fim uma idéia e ele (a) já capta na hora o que vc quer ? Alguém que praticamente completa suas frases?

Tem gente que chama isso de alma gemea mas na verdade tem uma explicação muito mais simples do que essa: Essa pessoa tem o mesmo CONTEXTO que você por isso é tão fácil (e agradavel) lidar com ela. E não necessariamente a pessoa precisa ter vivido anos ao seu lado para que isso ocorra. Basta que ela tenha vivido na mesma região, ou que tenha os mesmos gostos, ou que tenha feito o mesmo curso que você para que esse fenomeno ocorra. é muito menos custoso conversar, pois o "basico" essa pessoa já entende.

bem. com a IA não é tão diferente! para que ela consiga comprender melhor seu projeto e não "sair fazendo de qualquer jeito" é fundamental que ela tenha contexto do seu projeto. De como você quer que as coisas sejam construidas, de como é o conceito. Enfim, tudo que você sabe do projeto, ela também precisa saber!

Há uma forma de fornecer essa informação para ela. Veja a estrutura abaixo:

## Crie em seu projeto a seguinte estrutura:
````

.github/
├── copilot-instructions.md
├── instructions/
├    ├── html.instructions.md
├    ├── css.instructions.md
├    └── javascript.instructions.md
└── prompts/
    └── home.prompt.md
docs
└── manual.pdf

````

## O que essa estrutura propõe?
Um sistema de regras pra construção do seu projeto. Algo + ou - assim:

### 1. O que a IA deve SEMPRE fazer/saber
Em relação a como construir tecnicamente. (algo como: "use essa tecnologia" ou "sempre de nomes dessa forma")

Essas instruções vão ficar em:
```
.github/copilot-instructions.md
.github/instructions
```

Ex.:
- "Use HTML semântico."
- "Priorize acessibilidade."
- "Use Bootstrap."

### 2. O que a IA deve USAR COMO REFERÊNCIA
Aqui a gente deixa referências importantes pra Ia ter "um norte". (bem parecido como quando vamos preencher uma declaração e nos dão um "modelo" e a gente se baseia nisso pra fazer a nossa...)

Essas instruções vão para a basta docs:
```
docs/
```
Ex.:

- Manual de identidade visual
- Guia de fotografia
- Design System
- Manual de tom de voz
- Wireframes
- Documentação do projeto

** IMPORTANTE **
Os arquivos colocados em docs/ são referências do projeto, mas não são, por si só, instruções permanentes do Copilot.
Quando uma referência for relevante para uma tarefa, devemos indicar essa referência no prompt ou disponibilizá-la como contexto da tarefa. 

(algo como: de acordo com a documentação do arquivo docs/manual.pdf, construa tal coisa...)


### 3. Como a IA deve FAZER ISSO
Aqui é onde podemos guardar prompts que queremos reutilizar. É aqui que a gente diz: "crie uma pagina com a estrutura assim e assado". 

Essas instruções vão para:

```
.github/prompts/
```

Ex.:
- Criar uma página interna seguindo o layout da referencia X com estrutura: cabecalho, conteudo, rodape.
- Criar o card de produto no padrão Y.


** importante **
o prompt é a parte mais "popular" do uso da IA, e não é do habito de quem usa de forma recreativa guardar essas instruções. Entretanto no seu uso profissional, é fundamental que essas instruções sejam organizadas e não apagadas. Para entender a importancia disso, imagine a seguinte situação: Você precisa imprimir uma fotografia em uma gráfica. Ao chegar no balcão, você fala para o atendente: "Oi, queria imprimir essa foto que mandei pelo WhatsApp para vocês. Precisa ser em Preto e Branco e em um papel de qualidade".

Ao final do dia, você volta para a gráfica e tem uma surpresa: a foto foi impressa com uma resolução ruim pois usaram sulfite :-(
Quando conversa com o atendente para apontar o erro, não consegue se lembrar de como fez o pedido...

O atendente usou um papel sulfite que era de fato de boa qualidade, de uma boa marca! O atendente está errado? Não necessariamente.
O problema foi que a sua comunicação não foi suficientemente precisa! Entretanto se você se lembrasse de como pediu a impressão (ou tivesse uma anotação de como sempre deve pedir esse tipo de coisa), teria a oportunidade de em um próximo pedido especificar: quero um papel do tipo fotográfico.

No uso recreativo, você pode conversar com a IA e simplesmente seguir em frente. No uso profissional, precisamos conseguir entender, repetir e melhorar o processo que produziu um resultado.

### resumo geral da estrutura

| Elemento                          | Função                  |
| --------------------------------- | ----------------------- |
| `.github/copilot-instructions.md` | Regras gerais           |
| `.github/instructions/`           | Regras específicas      |
| `.github/prompts/`                | Instruções para tarefas |
| `docs/`                           | Referências do projeto  |
