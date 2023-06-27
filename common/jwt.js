const jwt = require('jsonwebtoken')
const SECRET_JWT = "its_a_secret@1234"

// using jwt for authentication
const verifyJwt = async(req, res, next) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(402).json({
            message : "No jwt provided",
            status : 402
        })
    }
    try{
        // verifying token with secret key
    const validate = await jwt.verify(token, SECRET_JWT)
    if(validate){
        req.Jwt_Data = validate
        // sending to next for use elsewhere in the project.
        return next()
    }
    return res.status(402).json({
        // sending bad request if user is entering invalid token
        message : "invalid jwt",
        status : 402
    })

    }
    catch(err){
        return res.status(500).json({
            message : "something went wrong",
            data : err,
            status: 500
        })
    }

}

module.exports   = verifyJwt