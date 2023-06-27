const { passwordValidate } = require('../../common/password')
const user = require('../../model/userSchema')

const jwt = require('jsonwebtoken')
const SECRET_JWT = "its_a_secret@1234"


const loginPost = async (req, res, next) => {
    try {

        const {  email, password } = req.body
        // finding user with email
        const user_response = await user.findOne({
            email:email
        })

        // comparing password user registered password or user entering password
        const passwordCompare = await passwordValidate(password, user_response.password)
        if(!passwordCompare){
            return res.status(402).json({
                // sending bad request
                message: "Invalid email or password",
                status: 402
            })
        }
        const data = {
            user : {
                id :user_response._id
            }
        }
        const authToken = await jwt.sign(data,SECRET_JWT)
        return res.status(201).json({
            message:"Login Successfully",
            // sending token for Auth user
            token: authToken
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "something went wrong",
            data: err,
            status: 500
        })
    }
}

module.exports = loginPost