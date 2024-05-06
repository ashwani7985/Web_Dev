const{default:mongoose}= require("mongoose");
const todoSchema = require("./todoSchema");
const userSchema = require("./userSchema");

const DB_NAME = process.env.DB_NAME || "todoApp";
const URI = process.env.MONGO_URI || "mongodb+srv://temp:temp@cluster0.632lzyb.mongodb.net"; 
const MONGO_URI = `${URI}/${DB_NAME}`;

mongoose.connect(MONGO_URI).then(()=>console.log("Connected")).catch((err)=>console.log(err));

const users = mongoose.model('user',userSchema, 'users');
const todos = mongoose.model('todo',todoSchema,'todos');

module.exports = {users, todos};