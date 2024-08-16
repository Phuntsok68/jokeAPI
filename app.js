
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app=express();
const port=3000;
const api='https://v2.jokeapi.dev/joke/';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('app.ejs',{
        content:''
    });
});

app.post('/', async (req,res)=>{
    const myType=req.body.type;
    try{
        const response=await axios.get(api+myType);
        res.render('app.ejs',{
            content:response.data.setup
        })
    }catch(error){
        console.error('There is an error ',error.message);
    }
   
})


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})