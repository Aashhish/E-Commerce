import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
Title:{
    type: String,
    required: true,
},
Description:{
    type: String,
    required: true,
},
image:{
    type: String,
    required: true,
},

Price:{
    type: String,
    required: true,
},

Mrp:{
    type: String,
    required: true
},

Discount:{
    type: String,
    required: true
}
})
export const Product= mongoose.model("Product", ProductSchema)