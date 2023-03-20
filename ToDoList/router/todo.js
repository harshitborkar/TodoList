const express=require('express');
const  createTodo = require('../controller/todoController');
const tempTodo=require("../controller/todoController")
const router=express.Router();
// create a task
router.post('/',createTodo.createTodo);
// update a task
router.put('/:id',createTodo.tempTodo);
// delete a task
// router.delete('/:id',createTodo.deleteTodo);
// all todo
router.get('/',createTodo.getTodolist);
// specific todo
router.get('/delete-task',createTodo.deleteTodo);
// udate status
// router.get('/:id/status/:status',createTodo.updateStatus)
module.exports=router;