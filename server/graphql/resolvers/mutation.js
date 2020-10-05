const { User } = require('../../models/user');

module.exports = {
    Mutation: {
        signUp: async( parent, args, context, info )=>{
           try{
                const user = new User({
                    email: args.fields.email,
                    password:args.fields.password
                });

                const getToken = await user.generateToken();
                if(!getToken) { throw new Error('Oh snap');}

                const result = await user.save();
                return { ...result._doc }
           } catch(err){
               throw err
           }
        },
        signIn: async( parent, args, context, info)=>{
            try {
                /// check user email
                const user = await User.findOne({
                    'email':args.fields.email
                });
                if(!user) { throw new Error('Email not recognized')}

                /// check the password
                const checkPass = await user.comparePassword(args.fields.password);
                if(!checkPass)  { throw new Error('Wrong password')}

                const getToken = await user.generateToken();
                if(!getToken) { throw new Error('Oh snap');}

                return { _id:user._id, email: user.email,token: getToken.token }
            } catch(err) {
                throw err;
            }
        }
    }
}