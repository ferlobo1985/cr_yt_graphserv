const { gql } = require('apollo-server-express');

const typeDefs =  gql`
    type Query {
        user(_id:ID!):User!
        findPostById(_id:ID!):Post
    }

    type Mutation {
        signIn( fields: AuthInput! ):User!
        signUp( fields: AuthInput! ):User!
        createPost( fields: PostInput! ):Post!
    }

    type User {
        _id:ID!
        email: String!
        password: String
        token:String
    }

    type Post {
        _id:ID!
        title: String!
        content: String!
        author:String
    }

    input AuthInput {
        email:String!
        password:String!
    }

    input PostInput {
        title:String!
        content:String!
        author:String
    }

`;

module.exports = typeDefs;