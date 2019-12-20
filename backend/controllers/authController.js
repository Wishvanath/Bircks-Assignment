const jwt = require('jsonwebtoken') // to generate signed token
const expressJWT = require('express-jwt') //to authorization check
const client = require('../connection')



exports.signin = (req, res) => {
    // find the user based on the email
    const {
        userName,
        userPassword
    } = req.body

    console.log(userName, userPassword)
    // find the existing user 
    const findUserQuery = ({
        text: `SELECT * from  public.signup WHERE user_name = '${userName}' and user_password = '${userPassword}'`,
    })
    // run the query
    client.query(findUserQuery, function(err, result){
        if(err){
            return res.json({
                success: false,
                message: "Database connection Error"
            })
        }else{
            if(result.rows.length > 0){
                // gran the user value
                const {
                    user_id,
                    user_name,
                } = result.rows[0]
                // generate a signed token with user id and secret
                const token = jwt.sign({
                    _id: user_id
                }, process.env.JWT_SECRET)
                // console.log(token);
                // persist the token "agri_user" in cookie with expiry date
                res.cookie("bricks_user", token,{
                    expire: new Date() + 9999
                })
                // return response to the frontend
                return res.json({
                    success: true,
                    token,
                    loginUser: {
                        user_id,
                        user_name
                    }
                })

            }else{
                return res.json({
                    success: false,
                    message: "Invalid User Name and Password"
                })
            }

        }
    })





};




exports.signout = (req, res) => {
    //    clear the cookie from the response
    res.clearCookie("bricks_user");
    res.json({
        message: "Signout successfully",
        
    });
}



// protecting the route
exports.requireSignin = expressJWT({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
})



