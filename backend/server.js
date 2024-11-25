const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://shanmukhik:2003@cluster-demo.ux9wg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-demo").then(() => console.log("Mongodb connected"))
.catch(()=>console.log("Error connecting to mongodb"));

const User = mongoose.model('User',{    
    name:String,
    email:String,
    phone:String,
    gender:String,

});

app.get('/', async(req,res)=>{
    try{
        res.send("Server is running");
    }catch(err){
        console.log("Error:",err);
    }
});


app.post('/users', async(req,res)=>{
    try{
       const {name,email, phone, gender}=(req.body);
       const newUser = new User(
        {
            name,
            email,
            phone,
            gender,

        }
       );
       await newUser.save();
       res.status(201).send(newUser);
    }catch(err){
        console.log("Error:",err);
        res.status(500).send("Error creating user");
    }
});

app.get('/users', async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).send(users);
    }catch(err){
        console.error("Error fetching users:", err);
        res.status(500).send("Error fetching users");
    }
});

app.put('/users/:id', async(req,res)=>{
    try{
        const {name, email, phone, gender} =req.body;
        const UpdatedUser= await User.findByIdAndUpdate(
            req.params.id,
            {name,email,gender,phone},
            {new:true}
        );
        res.status(200).send(UpdatedUser);
    }catch(err){
        console.log("Error:",err);
        res.status(500).send("Error updating user");
    }
});

app.delete('/users/:id', async(req,res)=>{
    try{
       

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        // If no user is found
        
        res.status(200).send("User deleted");
    }catch(err){
        console.log("Error:",err);
    }
}
);


const PORT = 5000;

app.listen(PORT, ()=>console.log("Server is running on ",PORT));