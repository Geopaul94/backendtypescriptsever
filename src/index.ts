import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routs';


const app =express();
app.use(bodyParser.json());

// app.get("/",(req ,res)=>{
//     res.send({flutter:'dev'});
// });


app.use ("/",router)
app.listen(3000,()=>{
    console.log("server is running on the port 3000");
})
;


