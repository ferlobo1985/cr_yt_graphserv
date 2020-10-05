const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/schema');
const { Query } = require('./graphql/resolvers/query');
const { Mutation } = require('./graphql/resolvers/mutation');

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation
    },
    context:({ req })=>{

        req.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdhN2NhNDA2YjkxYWFmNDE2NTBlOWYiLCJlbWFpbCI6InN0ZXZlQGdtYWlsLmNvbSIsImlhdCI6MTYwMTg2MjgyMCwiZXhwIjoxNjAyNDY3NjIwfQ.RqTtmtYxfH6zohrCllmZkgCSocR9d-tMaQu2Hfu6mzE'

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


