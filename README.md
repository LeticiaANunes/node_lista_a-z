### GET STARTER

- Instale as dependências

```bash
npm install
```

#### Caractarísticas

- Utilização MVC;
- Baixo acomplamento;
- Auta coesão;
- Modularização;
- Utilização de Scapes para estilização parcial.


#### Bibliotecas

- Inquirer: Recebe valores de entrada do usuário

#### Explicação do código

- Em app.js é inicializada a aplicação;
- Em "Services > menu" é chamada a função "initial", que apresenta ao usuário um menu para seleção. Ao selecionar a opção inserção, é chamada a função de input, para que o valor seja recebido e processado;
- Em controller, contêm as regras de negócio. Especificamente em "controller > saveDB", é verificado se o objeto repassado existe, caso não exista, a função é retornada e um erro é apresentado, sem ocasionar a interrupção da aplicação (tramento de exceção);
- Em models há um objeto DB para persistência em tempo de execução, que recebe inicialmente um array vazio e posteriormente os dicionários com os valores repassados pelo usuário;
- Em services temos um repository para execução de funções para salvar e ordenar, conforme contexto repassado.

**Importante:** Comentários de cada função se encontram presentes nos respectivos módulos.
