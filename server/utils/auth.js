const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
require('dotenv').config();

const authorizeAndVerify = (req) => {
    /////////////
    const authorizationHeader = req.headers.authorization || '';
    if(!authorizationHeader){
        req.isAuth = false;
        throw new AuthenticationError('Auth error 1');
    }
    /////////////
    const token = authorizationHeader.replace('Bearer ','');
    if(!token || token === ''){
        req.isAuth = false;
        throw new AuthenticationError('Auth error 2');
    }
    ///////////
    let decodeJWT;
    try {
        decodeJWT = jwt.verify( token, process.env.SECRET );
        if(!decodeJWT){
            req.isAuth = false;
            throw new AuthenticationError('Auth error 3');
        }
        req.isAuth = true;
        req.token = token;
        req._id = decodeJWT._id;
        req.email = decodeJWT.email
        return req;
    } catch(err){
        req.isAuth = false;
        throw new AuthenticationError('Auth error 4');
    }
}

module.exports = authorizeAndVerify;