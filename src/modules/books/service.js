const { GraphQLClient } = require('graphql-request');
const { services } = require('./../../config');

const client = new GraphQLClient(services.userService.url,{
    credentials: 'include',
    mode: 'cors'
});

async function validateUser(id) {

const query= `query{
    user(id:"${id}"){
      id,
      name
    }
  }`
const result = await client.request(query);
return result;
}

module.exports = {
    validateUser
}