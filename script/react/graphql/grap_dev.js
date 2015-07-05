var GraphQL = require('graphql');

var schema = new GraphQL.GraphQLSchema({
  query: new GraphQL.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQL.GraphQLString,
        resolve: function() { return 'world'; }
      }
    }
  })
});

var query = '{ hello }';

GraphQL.graphql(schema, query).then(function (result) {

  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);

});