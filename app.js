const express=require('express');
const mongoose=require('mongoose');
const Technologies=require('./routes/technologies');

mongoose
    .connect('mongodb://localhost/TechnologiesApi')
    .then(()=>console.log(`Server is Connected A mongodb`))
    .catch((err)=>console.log(`Failed Connected  a Mongodb ${err}`));

const app=express();
app.use(express.json());


app.use('/api/technologies',Technologies);



const PORT =3000;
app.listen(PORT, ()=>console.log(`Server is Runing in port ${PORT}`));
