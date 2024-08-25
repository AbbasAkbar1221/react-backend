const user = require('../models/userschema');

function signup(req, res)  {
    const obj = req.body;
    user.create(obj)
        .then(user => {
            res.send("User created successfully");
            
        })
        .catch(err => {
           res.send("Error creating user");
        });
    };

    function login(req, res)  {
        const { email, password } = req.body;
        user.findOne({ email })
            .then(user => {
                if (!user) {
                    return res.send('User not found');
                }
                else if (user.password !== password) {
                    return res.send('Incorrect password');
                }
                else {
                    res.send('User logged in successfully');
                }
            })
            .catch(err => {
                console.log(err);
                res.send('Error logging in');
            });
    }

    module.exports = { signup, login };