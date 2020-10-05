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


