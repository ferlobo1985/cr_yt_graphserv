const { AuthenticationError, ApolloError } = require('apollo-server-express')
const { User } = require('../../models/user');
const { Post } = require('../../models/post');

const authorize = require('../../utils/auth');
const { userOwnerShip } = require('../../utils/tools');

module.exports = {
    Query: {
        user:async( parent, args, context, info )=>{
            const req = authorize(context.req);
            const user = await User.findOne({'_id': args._id });
            if(!user) throw new ApolloError('No user found');

            if(!userOwnerShip( req, args._id )) 
                throw new AuthenticationError('You dont own this post');

            return user;
        },
        findPostById: async( parent, args, context, info )=> {
            const req = authorize(context.req);
            const post =  await Post.findOne({'_id': args._id });
            if(!post) throw new ApolloError('No post found');

            if(!userOwnerShip( req, post.author )) 
            throw new AuthenticationError('You dont own this post');

            return post;
        }
    }
}