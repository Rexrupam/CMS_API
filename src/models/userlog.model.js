import mongoose from "mongoose"

const cmsSchema = new mongoose.Schema({
     content1:{
        type: String
     },
     content2:{
        type: String
     },
    content3:{
        type: String
    },
    content4:{
        type: String
     }
}, {
    timestamps: true
})



export const Cms = mongoose.model('Cmsschema', cmsSchema)