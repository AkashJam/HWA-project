# HWA-project
# FALUN

## Table of Contents
1. [Group Members](#Group-Members)
2. [Contributions](#Contribution)
3. [Technical documentation](#Technical-documentation)
4. [Comments](#Comments)
5. [Link](#Link)

## Group-Members
Pietro Boschini 10539762 \
Andres Gonzalez Paul 10736712 \
Akash Aloysius James 10687690 \
Ilaria Ronconi 10541302

## Contribution:
Pietro:

Andres:

Akash:

Ilaria:

## Technical-documentation
### Server and DB technologies used 
The backend database used in this website is PostgreSQL setup using Heroku free Postgres. We are using the plugin `sequelize` to interact with the DB.

### Components developed, their functionalities and structure
**Breadcrumbs**: this is the component that displays the breadcrumps on top of the page.

**Footer**: this component for Footer displays all the landmark links.

**Header**: this component accepts heading, subheading and desscriptions parameters to be displayed in order of heading style.

### Plugins
#### Client-side
**MMCC**: Plugin for chatbot
#### Server-side
**Sequelize**: Sequelize is the plugin used to interact with the DB. It provides ability to create tables with models, insert and search from DB by calling required functions. 

The DB model was created with the sequelize-cli installed with command `npm install --save sequelize-cli sequelize`. It also requires installation of components for postgres: `npm install --save pg pg-hstore pg-native`.

Sequelize makes use of DB connection strings configured in server/config/config.js file.

The DB model was created from cli with command `sequelize-cli model:generate --name <table_name> --attributes <field_name1>:<field_type>,<field_name2>:<field_type>,...`. This will create files in server/models and server/migrations folder.

Then it needs to be migrated with command `sequelize-cli db:migrate`. This will create the table with the provided attributes.


## Comments 
Comments about how your usage of the framework was compliant to the best practices for the specific application domain of your website


## Link
https://falun.herokuapp.com/
