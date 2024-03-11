const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();


const app = express();


const connect = async ()=>
{
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('connected mongodb');
}
catch (error){
  throw error;

}

};


const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send('df')
})
app.listen(PORT,()=>{
    console.log(`you have in ${PORT}`)
})