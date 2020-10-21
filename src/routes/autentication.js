const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn, isNotLogout } = require('../lib/auth');


router.get('/signin',isNotLogout, (req, res) => {
    res.render('auth/signin');
});

router.post('/signin',isNotLogout, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true      
    })(req, res, next);
});


router.get('/signup',isNotLogout, (req, res) => {
    res.render('auth/signup');
});


router.post('/signup', isNotLogout, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));



router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('signin');
});

module.exports = router;