const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const app=express();
const port=8000;
const routes=require("./router/index")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',routes);
app.use(express.static(__dirname));
app.set('view engine','ejs')
app.set('views','./views')
async function serverRun(){
    try {
        await mongoose.connect('mongodb://localhost/todolists_db')
        console.log('connected to database')
        app.listen(port,err=>{
            if(err){
              return   console.log(err)
            }
            return console.log('server running on port',port)

        })
    } catch (error) {
        console.log(err)
    }
}
serverRun();
