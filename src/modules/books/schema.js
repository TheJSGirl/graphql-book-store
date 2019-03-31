const { GraphQLID,  GraphQLString,  GraphQLList,  GraphQLObjectType,  GraphQLBoolean } = require('graphql');

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: {
        id: { type: GraphQLID },
        user: { type: GraphQLString },
        name: { type: GraphQLString },
        authors: { type: GraphQLList(GraphQLString) },
        edition: { type: GraphQLString },
        image: { type: GraphQLString },
        subject: { type: GraphQLString },
        price: { type: GraphQLString },
        deleted: { type: GraphQLBoolean },
    }
});

module.exports = {
    BookType
}
