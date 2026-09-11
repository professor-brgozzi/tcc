# Guardrails → "A IA precisa de contexto" 
Para entender o que são Guardrails, vou fazer uma analogia.
 
Todo mundo já teve aquele professor incrível, que era muito inteligente. Capaz de conversar sobre absolutamente qualquer assunto.
 
Mas, quando pedíamos para ele explicar alguma coisa, a explicação parecia correta. O problema é que ele ia tão profundamente no assunto e conectava tantos assuntos diferentes ao que havíamos perguntado que, no final, ficava impossível entender o que ele estava dizendo.
 
Seu professor era incrível, mas sua resposta não era útil para aquela situação.
 
É dessa maneira que temos que ver os modelos de IA. São capazes de tudo. Conseguem conectar contextos diversos, mas podem se perder severamente na prórpria capacidade. É por isso que um dos primeiros conceitos que se deve dominar é o de guardrails.
 
Guardrails são regras e limites que orientam a IA sobre até onde ela pode ir e como deve executar uma tarefa.
 
Eles podem envolver por exemplo:
 
- limitar o escopo da tarefa;
- definir o que a IA deve fazer;
- definir o que a IA não deve fazer;
- determinar quais fontes ou referências deve utilizar;
- estabelecer regras de formato;
- impedir determinados tipos de resposta ou comportamento;
- validar ou filtrar a entrada e/ou a saída do modelo.
Guardrails delimitam o espaço de atuação da IA.
 
 

## Um exemplo simples
 
Sem guardrail:
```text
Crie uma página estilo "HomePage" para uma cafeteria.
 ```

Com guardrails:

```text 
Crie uma página estilo "Home Page" para uma cafeteria.

- Utilize apenas as cores definidas no manual de identidade visual.
- Utilize HTML, CSS e Bootstrap.
- A página deve ser responsiva.
- Não altere o logotipo fornecido.
- A página deve conter um Banner TV logo abaixo do menu principal.
- Siga estritamente o padrão de layout definido no Figma (link do figma).
```

# Exercício
 
Seguindo a mesma lógica do exemplo acima, crie sua versão com guardrail do prompt:
 ```text
Crie uma página estilo "Lista de produtos" para uma cafeteria.
 ```
Agora, escreva sua própria versão "com guardrails", adicionando pelo menos 3 restrições novas diferentes das usadas no exemplo (pode envolver tecnologia, fontes/referências, formato, ou comportamento esperado da IA).
 
Ao final, compare com um colega: os guardrails escolhidos foram os mesmos? Por quê?
 
 