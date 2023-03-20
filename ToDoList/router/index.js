const express=require('express');
const router=express.Router();
const controller=require('../controller/todoController')
const todoModel=require('../models/index')
const todods=require('./todo');
router.use('/',todods);

        


module.exports=router
