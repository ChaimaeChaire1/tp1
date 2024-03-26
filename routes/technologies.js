const express=require('express');
const asyncHandler=require('express-async-handler');
// const { Technologie }= require('../models/Technologie');
const { Technologie } = require('../models/Technologie');
const router = express.Router();

router.get('/',asyncHandler(
    async(req,res)=>{
        const Techno = await Technologie.find();
        res.status(200).json(Techno);
    }
));
router.get('/:id',asyncHandler(
    async(req,res)=>{
        const Techno = await Technologie.findById(req.params.id);
        if(Techno){
            res.status(200).json(Techno);
        }
        else{
            res.status(404).json({message:'Technologie not found '});
        }
    }
));

router.post('/',asyncHandler(
    async(req,res)=>{
        const newTechno=new Technologie({
            nom:req.body.nom,
            domaine:req.body.domaine,
            date:req.body.date
        });
        const resulta =await newTechno.save(); 
        res.status(201).json(resulta);
    }
));


router.put('/:id',asyncHandler(
    async(req,res)=>{
        const newTechnoUpdate= await Technologie.findByIdAndUpdate(req.params.id,{
            $set :{
                nom:req.body.nom,
                domaine:req.body.domaine,
                date:req.body.date
            }
        },{
            new:true
        })
        res.status(201).json(newTechnoUpdate);
    }
));

router.delete('/:id',asyncHandler(
    async(req,res)=>{
        const newTechnDelete= await Technologie.findById(req.params.id);
        if(newTechnDelete){
            await Technologie.findByIdAndDelete(req.params.id);
            res.status(404).json({message:' technologie has deleted'});
        }
        else{
            res.status(404).json({message:'Technologie not found '});
        }
        
        res.status(201).json(newTechnoUpdate);
    }
));
module.exports=router;