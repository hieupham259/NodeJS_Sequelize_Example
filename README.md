# NodeJS_Sequelize_Example
Using Sequelize to migrate MySQL Database with NodeJS.
- [example 1](https://dev.to/adefam/create-update-add-and-delete-sequelize-migration-eoa)
- [example 2](https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527)
- [example 3](https://sequelize.org/docs/v6/other-topics/migrations/)
- [example 4](https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7)

## sequelize-cli commands
1. _npx sequelize-cli model:generate --name {Model name} --attributes {attr name1}:{attr type1},{attr name2}:{attr type2}, ..._
- Create a new Model. 
- Generate a new file: models/{model name}.js.
- Generate a new file: migrations/XXXXXXX-create-{model name}.js

2. _npx sequelize-cli migration:create --name {Migration name}_
- Create a new file: migrations/XXXXXXX-{Migration name}.js

3. _npx sequelize-cli db:migrate_
- Run migration

## Create the controller and apis for CRUD operations
(Italic is done)
- Controller:
    1. Storage:
        + _Create storage_.
        + _Access to the storage_.
        + _Get all the storages_.
        + _Delete the storages_.
        + _Get all policies of the storage_.
    2. Storage Policy:
        + _Create policy to access the storage_.
        + _Delete policy of storage_.
## Dockerize the application.

