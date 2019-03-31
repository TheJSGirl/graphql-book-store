const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: {
        id: { type: GraphQLID },
        user: { type: GraphQLString },
        name: { type: GraphQLString },
        authors: { type: [GraphQLString] },
        edition: { type: GraphQLString },
        image: { type: GraphQLString },
        subject: { type: GraphQLString },
        price: { type: GraphQLString },
        deleted: { type: GraphQLString },
    }
});


module.exports = {
    BookType
}
