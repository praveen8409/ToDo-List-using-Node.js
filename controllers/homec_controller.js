//const db = require('./config/mongoose')
const TodoLists = require('../models/todo_list')
// function for redirecting to main home page
module.exports.home = async function(req,res){
    // fetching using mongoose
   try {
    let todo = await TodoLists.find({});
        
        return res.render('home',{
            title:"Home",
            todoList:todo
          });
   } catch (error) {
    console.log(error,'Error is getting while fatching data');
    return;
   }
}