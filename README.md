# API Connect - Gerenciamento de Usuários

## Descrição

A API Connect é uma API REST desenvolvida em Node.js com Express para realizar o gerenciamento de usuários. O projeto permite cadastrar, listar, consultar, atualizar e remover usuários, utilizando uma estrutura de dados em memória para simular a persistência das informações.

O projeto foi desenvolvido seguindo princípios de organização de código, separação de responsabilidades, utilização adequada dos métodos HTTP e padronização das respostas em JSON.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- JSON
- Thunder Client para testes dos endpoints

## Estrutura do projeto

```text
api-connect/
├── controllers/
│   └── usersController.js
├── data/
│   └── users.js
├── routes/
│   └── usersRoutes.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Instalação

Para executar o projeto localmente, é necessário possuir o Node.js instalado.

Após baixar ou clonar o repositório, acesse a pasta do projeto pelo terminal e execute:

```bash
npm install
```

Esse comando instalará as dependências definidas no arquivo `package.json`.

## Execução

Para iniciar a API, execute:

```bash
node server.js
```

O servidor será iniciado na porta 3000.

A URL base para acesso local é:

```text
http://localhost:3000
```

## Endpoints

| Método | Endpoint | Finalidade | Resposta esperada |
|---|---|---|---|
| GET | `/users` | Lista todos os usuários | 200 OK |
| GET | `/users/:id` | Busca um usuário pelo ID | 200 OK ou 404 Not Found |
| POST | `/users` | Cadastra um novo usuário | 201 Created ou 400 Bad Request |
| PUT | `/users/:id` | Atualiza os dados de um usuário | 200 OK ou 404 Not Found |
| DELETE | `/users/:id` | Remove um usuário | 204 No Content ou 404 Not Found |

## Exemplo de cadastro

Requisição:

```http
POST /users
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

Quando os dados são válidos, a API cria o usuário e retorna o código HTTP `201 Created`.

## Validação

Os campos `nome` e `email` são validados nas operações de cadastro e atualização. Caso os dados obrigatórios não sejam fornecidos corretamente, a API retorna uma resposta JSON de erro acompanhada do código HTTP `400 Bad Request`.

Exemplo:

```json
{
  "error": {
    "status": 400,
    "message": "O campo email é obrigatório e deve ser válido."
  }
}
```

## Busca por ID

A API permite consultar um usuário específico através do seu identificador:

```http
GET /users/:id
```

Caso o usuário solicitado não exista, a API retorna o código `404 Not Found` com uma resposta JSON informando que o registro não foi encontrado.

## Persistência de dados

Para fins de desenvolvimento e demonstração do MVP, os usuários são armazenados em uma estrutura de dados em memória. Portanto, os dados adicionados durante a execução são reiniciados quando o servidor é encerrado e iniciado novamente.

## Testes

Os endpoints foram testados utilizando o Thunder Client no Visual Studio Code. Foram verificados cenários de sucesso e de erro, incluindo:

- cadastro válido de usuário;
- tentativa de cadastro com dados inválidos;
- listagem de usuários;
- busca de usuário inexistente.

Os testes confirmaram o funcionamento dos códigos HTTP `200`, `201`, `400` e `404`, de acordo com cada operação executada.

## Autor

Projeto desenvolvido para fins acadêmicos na implementação de uma API REST para gerenciamento de usuários. 
Bernardo Resende.
