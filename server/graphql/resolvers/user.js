const { Post } = require('../../models/post');

module.exports = {
    User:{
        posts: async(parent,args,context,info)=>{
            try {
              const userId = parent._id;
              const response = await Post.find({author:userId});

              return response;
            } catch(err){
                throw err;
            }
        }
    }
}