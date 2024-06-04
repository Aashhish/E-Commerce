import express from "express";
import { Product } from "../models/Products.js";
import { applyMiddleWare } from "../middleWare/Auth.js";
import multer from "multer";
import { User } from "../models/User.js";
const ProductRouter = express.Router()


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"_"+file.originalname);
    }
});

const upload = multer({storage:storage})

ProductRouter.post("/Product",applyMiddleWare,upload.single("image"), async(req, res)=>{
    try{
     
        const product = new Product({
            Title: req.body.Title,
            Description: req.body.Description,
            image: req.file.path,
            Price: req.body.Price,
            Mrp: req.body.Mrp,
            Discount: req.body.Discount,
            
        })
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    }
    catch(error){
    res.status(400).json({ message: error.message });
        
    }
});



ProductRouter.get("/Product", applyMiddleWare, async (req, res)=>{
    try{
        const posts = await Product.find();
        res.json(posts);
    }catch(err){
        console.log(err);
    }
});

ProductRouter.get("/Product/:id",applyMiddleWare, async(req, res)=>{
    try{
        const id = req.params.id
        const product = await Product.findById(id);
        res.json(product);
    }
    catch(err){
        console.log(err)
    }
});

ProductRouter.put("/Product/:id",applyMiddleWare,upload.single("image"), async(req, res)=>{
    try{
        const id = req.params.id
        const {Title, Description, Price, Mrp, Discount} = req.body
        const image= req.file.path
        const UpdatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                Title, 
                Description, 
                image,
                Price,
                Mrp,
                Discount
            },
            {new: true}
        );
        res.json(UpdatedProduct);
    }
    catch(err){
        console.log(err)
    }
})

ProductRouter.delete("/Product/:id",applyMiddleWare, async(req, res)=>{
    try{
        const id = req.params.id
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.json({message: "Product Deleted Successfully"})
    }
    catch(err){
        console.log(err)
    }
})
export default ProductRouter;