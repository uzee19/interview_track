const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router(); // to use route module of express.
const passport = require('passport');
const Company=require('../models/Companies');
const Exp = require('../models/Exps');
const multer = require('multer');
const path = require('path');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.use(express.static(__dirname+"./public/"));



var Storage= multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('file');

router.get('/uploads',(req,res)=>{
  res.render('upload-file');
});
router.post('/uploads',upload,(req,res)=>{
  res.render('upload-file');
})
router.get('/', ensureAuthenticated,async (req,res)=>{
    let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
    try{
        const comps = await Company.find(searchOptions).sort({name:'asc'});
        const exp = new Exp()
        res.render('complist',{
            comps:comps,
            searchOptions: req.query,
            exp:exp,
            user:req.user
            
        });
    }
    catch{
        res.redirect('/');
    }
});

router.post('/', async (req,res)=>{
  const exp = new Exp({
    name: req.body.name,
    branch: req.body.branch,
    year:req.body.year,
    company: req.body.company,
    exp:req.body.exp,
    image:req.body.file
    
  })
  try{
    const newExp = await exp.save()
    
    if(1)
    {
      req.flash('success_msg','Experience is sent for approval !');
      res.redirect('/comps');
    }
    
  }
  catch{
        
    req.flash('error_msg','Please fill all fields ');    
    res.redirect('/comps');
    
  }
});
module.exports = router;