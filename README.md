# Animal Care

O projeto foi desenvolvido como parte da nota das disciplinas de Engenharia de Software 1 e 2, do curso de Ciência da Computação. Em Engenharia de Software 1, foram elaborados os documentos do projeto, enquanto em Engenharia de Software 2 foi realizada a construção da aplicação utilizando React com TypeScript.

# Instalações obrigatorias

Para utilizar o projeto, é necessário ter o **Node.js** instalado. A versão utilizada durante o desenvolvimento, sem apresentar problemas, foi a **v22.13.1**. Para verificar a versão instalada em seu sistema, abra o terminal e digite: **node --version**.

# Guia para utilizar o projeto

### Primeiro passo
> Escreva o comando: **npm install** na pasta **server** e **client**

### Segundo passo
> Dentro da pasta **server** escreva no terminal o comando: **npm install @prisma/client**

### Terceiro passo
> Ainda dentro da pasta **server** cria um arquivo .env e cola dentro o seguinte texto DATABASE_URL entre aspas, como no exemplo: **DATABASE_URL="link-secreto-da-database.com.br"**

> Por fim escreva o comando: **npx prisma generate**
> Caso queira visualizar o banco de dados digita: **npx prisma studio** 

### Último passo
> Escreva: npm run dev na pasta **client** e **server**
