require('dotenv').config();
const express = require("express");
const graphqlHTTP = require('express-graphql');
const mainRoutes = require('./src/modules/index');
const { App } = require('./src/config');
const { middleware, database } = require('./src/lib');
// const schema = require('./src/modules/graphql');

const app = express();

middleware(app);
mainRoutes(app);
database.connect();

const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
    // schema: schema,
    // rootValue: root,
    graphiql: true,
}));

app.listen(App.PORT, App.HOST, (e) => {
    if(e) {
        logger.error(e.message);
    }
    logger.info(`${App.NAME} running on ${App.HOST}:${App.PORT}`);
})
