var mongoose=require('mongoose');
var categoryList=["Personal","Professional","Academics","Social","Other"]
var TodoSchema= mongoose.Schema({
    name:{
        type:String,
        required:true       

    },
    category:{
        type:String,
        required:true
    },
    date :{
        type:Date,
        required:true
    },
    status:{
        type:Number,
        enum:[0,1],
        default:0,

    }  
    
})
TodoSchema.statics.getCategoryList=function getcategorList(){
    return categoryList
}
TodoSchema.statics.isValidCategory=function isValidCategory(categoryItem){
    if(categoryList.indexOf(categoryItem)==-1){
        return false
    }
    return true
}
var todoModel=mongoose.model("todo",TodoSchema);
module.exports=todoModel;