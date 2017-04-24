const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
