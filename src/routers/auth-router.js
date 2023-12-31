const router = require('express').Router();
const passport =require('passport')

router.get('/login',(req,res)=>{
    res.render('login',{user:req.user});
})

router.get('/signup',(req,res)=>{
    res.render('signup',{user:req.user});
})

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})

router.get('/google', passport.authenticate(
    'google' ,{
        scope : ['profile' , 'email']
    }
))

router.get('/google/redirect', passport.authenticate('google') ,(req,res)=>{
    res.redirect('/users/profile')
})

module.exports = router;