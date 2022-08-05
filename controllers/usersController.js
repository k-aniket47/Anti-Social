const User = require('../models/User');

module.exports.profile= function(req,res){
    User.findById(req.params.id, function(err, user){
        return res.render('profile',{
            'title':'profile',
            profile_user: user
        })
    })
}

module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            req.flash('success', 'Updated!');
            return res.redirect('/');
        });
    }else{
        req.flash('error', 'Unauthorized!');
        return res.status(401).send('Unauthorized');
    }
}

module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign_up', {
        title: "Anti Social | Sign Up"
    })
}

module.exports.signIn = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign_in', {
        title: "Anti Social | Sign In"
    })
}
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){req.flash('error in finding user in signing up', err); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){req.flash('error in creating user while signing up', err); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }

    });
}


module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/') 
} 

module.exports.destroySession = function(req, res){
    
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success', 'Logged Out');
        res.redirect('/');
    });
}

