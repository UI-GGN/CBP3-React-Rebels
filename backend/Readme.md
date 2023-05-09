# Backend Application

Run Application
```sh
npm run dev
```

### Create a model named Users using sequelize-cli

```sh
npx sequelize-cli model:generate --name Users --attributes firstName:string,lastName:string,email:string
```

### Running Migrations

```sh
npx sequelize-cli db:migrate
```

### Undoing Migrations
```sh
npx sequelize-cli db:migrate:undo
```

Project Strucuture - Frontend
------------------------------------

1. config - Here we will keep config.json which is used by sequelize to connect to db on dev, test and production. Note: Do not push real credentials to repo (passwords/sensitive keys)
2. migrations - Here, all migrations will be stored which are responsible for CRUD operations on Database.
3. models - Here we will have all the class files which are used in order to perform operations on Database tables
4. seeders - Here, we will add seeders in case we need to create dummy data or prepopulate database.


Reference Links: 
1. [Migrations with Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)
2. [Setting up Sequelize](https://sequelize.org/docs/v6/getting-started/)
3. [Model Basics](https://sequelize.org/docs/v6/core-concepts/model-basics/)


Stack:
1. Node
2. Express
3. Sequelize (ORM)
4. Database - Sqlite(for now)
5. Migrations - Sequelize CLI