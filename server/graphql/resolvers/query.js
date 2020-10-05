const { AuthenticationError, ApolloError } = require('apollo-server-express')
const { User } = require('../../models/user');

module.exports = {
    Query: {
        user:async( parent, args, context, info )=>{
            const user = await User.findOne({'_id': args._id });
            if(!user) throw new ApolloError('No user found');

            return user;
        }
    }
}