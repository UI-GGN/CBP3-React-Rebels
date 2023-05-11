# Backend Application

Run Application
```sh
npm run dev
```

# Create a model named Users using sequelize-cli

```sh
npx sequelize-cli model:generate --name Users --attributes firstName:string,lastName:string,email:string,password:string,isActive:boolean
```

# Running Migrations

```sh
npx sequelize-cli db:migrate
```

# Undoing Migrations
```sh
npx sequelize-cli db:migrate:undo
```

Reference Links: 
1. [Migrations with Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)
2. [Setting up Sequelize](https://sequelize.org/docs/v6/getting-started/)
3. [Model Basics](https://sequelize.org/docs/v6/core-concepts/model-basics/)
