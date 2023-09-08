#### CSS Sorter: Ferramenta de Ordenação de Propriedades CSS

Descrição do Projeto:
Desenvolva uma ferramenta em linha de comando utilizando o Node.js para receber uma lista de propriedades CSS e ordená-las em ordem alfabética. Essa ferramenta será útil para desenvolvedores web que desejam organizar suas propriedades CSS de maneira eficiente, facilitando a localização e a edição de propriedades específicas.


🚀 **GET STARTER**

**Certifique-se de que você atende aos seguintes requisitos**:

- Node.js instalado (versão 14.0 ou superior)
- npm instalado

🛠️ **Construído com**

Este projeto foi construído utilizando as seguintes ferramentas:

- Node.js - Ambiente de execução JavaScript
- React - Biblioteca JavaScript para criação de interfaces de usuário
- Express - Framework web para Node.js
- MongoDB - Banco de dados NoSQL

🔧 **Instalação**

Siga estas etapas para configurar o ambiente de desenvolvimento:

1. Clone o repositório:

- git clone [https://github.com/seu-usuario/seu-projeto.git](https://github.com/LeticiaANunes/node_lista_a-z.git)

2. Navegue até o diretório do projeto:

- cd seu-projeto

- csharp

3. Instale as dependências:

- npm install
- cd css-sorter
- node css-sorter.js "background-color, font-size, text-align"

4. Execute o projeto:

- npm start
- As propriedades CSS ordenadas em ordem alfabética:
background-color
font-size
text-align

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

#### Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE.md para detalhes.

### Autor

Leticia Nunes
leticiaalexandra2@gmail.com

### Contribuições

Agradeço as contribuições da comunidade open-source para melhorar esta ferramenta.
  

**Importante:** Comentários de cada função se encontram presentes nos respectivos módulos.
