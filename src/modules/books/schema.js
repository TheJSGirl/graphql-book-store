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

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: {
        authors: { type: GraphQLList(GraphQLString) },
        book: { type: BookType }
    }
});

module.exports = {
    BookType,
    AuthorType
};
