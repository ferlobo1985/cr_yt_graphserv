const { gql } = require('apollo-server-express');

const typeDefs =  gql`
    type Query {
        user(_id:ID!):User!
    }

    type Mutation {
        signIn( fields: AuthInput! ):User!
        signUp( fields: AuthInput! ):User!
    }

    type User {
        _id:ID!
        email: String!
        password: String
        token:String
    }

    input AuthInput {
        email:String!
        password:String!
    }

`;

module.exports = typeDefs;