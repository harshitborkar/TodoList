const { findById } = require('../models/index');
const todoModel=require('../models/index')
module.exports.tempTodo=function(req,res){};
module.exports.createTodo=async function(req,res){
    const {name,category,date}=req.body;
    try {
        if(!name|| !category || !date){
            return res.status(402).json({
                success:false,
                message:"name is not vaild"
            })
        }    
        if(!todoModel.isValidCategory(category)){
            return res.status(402).json({
                success:false,
                message:"category is not vaild"
            })
        }
        let todo= await todoModel.create(req.body)
        console.log(req.body)
        return res.redirect('/')
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'interal server error'
        })
    }
    
}
module.exports.deleteTodo=async function(req,res){
  //getting the id of selected boxes
  let id = req.query;
  console.log(id);

  //gives the length of the selected checkboxes
  let checkboxes=Object.keys(id).length;

  //iterating over each selected boxes
  for(let i=0;i<checkboxes;i++)
  {
      // find the item in the database using id and delte it
      let todo=await todoModel.findByIdAndDelete(Object.keys(id)[i])
        todo    
}
  return res.redirect('back');
}
 


module.exports.getTodolist=async function getTodolist(req,res){
    try {
        let todolist=await todoModel.find({})
        if(!todolist){
            todolist=[]
        }
        return res.render('home',{
            todo_list:todolist
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'interal server error'
        })
    }
    
}

