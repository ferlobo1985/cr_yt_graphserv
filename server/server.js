const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/schema');
const { Query } = require('./graphql/resolvers/query');
const { Mutation } = require('./graphql/resolvers/mutation');
const { User } = require('./graphql/resolvers/user');
const { Post } = require('./graphql/resolvers/post');

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation,
        User,
        Post
    },
    context:({ req })=>{

        // req.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdhNmY4MDZjMzBjOWFjMGY1OWVjNDYiLCJlbWFpbCI6ImZyYW5jaXNAZ21haWwuY29tIiwiaWF0IjoxNjAxODYyMzQzLCJleHAiOjE2MDI0NjcxNDN9.I5JKJi00-BkvnVSxRwj-b36siLRVS0yb5Xy-avL9QaA'

        return { req }
    }
});

server.applyMiddleware({ app });

// graphuser  :  LfLXerBbVepf8U7y
const PORT = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://graphuser:LfLXerBbVepf8U7y@cluster0.5eeik.mongodb.net/<dbname>?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`)
    })
}).catch(err=>{
    console.log(err)
})


