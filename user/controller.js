const { passwordGenerate } = require('../common/password')
const user = require('../model/userSchema')

const postUser = async (req, res, next) => {
    try {

        const { name, email, password } = req.body
        // Generating password hash
        const passwordHash = await passwordGenerate(password)

        // creating user
        const user_response = await user.create({
            name,
            email,
            password: passwordHash
        })
        // console.log(user_response)
        if (user_response) {
            return res.status(201).json({
                message: "User Registered Successfully",
                data: user_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "please fill all required details",
            status: 402
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "something went wrong",
            data: err,
            status: 500
        })
    }
}


module.exports = { postUser}