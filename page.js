var express = require('express');
var router = express.Router();
var fs = require('fs');


// Home page routes . 
router.get('/' , (req,res)=> {
  res.render('index', {
    title: 'home'
  });
})
router.get('/about' , (req,res)=> {
res.render('about',{
 title: 'about'
});
})
router.get('/profile' , (req,res)=> {
res.render('profile',{
  title : 'Profile'
});
})

router.get('/contack' , (req,res)=> {
res.render('contack',{
  title : 'Contack'
});
})





 module.exports = router;