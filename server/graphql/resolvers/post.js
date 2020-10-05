const { User } = require('../../models/user');

module.exports = {
    Post:{
        author: async(parent,args,context,info)=>{
            try {
                const userId = parent.author;
                const user = await User.findOne({_id:userId});

                return {
                    ...user._doc,
                    password: null
                }
            } catch(err){
                throw err;
            }
        }
    }
}