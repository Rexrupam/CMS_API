import {Cms} from "../models/content.model.js"

export const updateContent = async(req,res)=>{
   try {
    const { content1, content2, content3, content4}= req.body
    if(!content1 && !content2 && !content3 && !content4 ){
       return res.status(400).json({message: "All fields are required"})
    }
    
    const cms = await Cms.findOneAndUpdate(
        {
            documentName: 'admin'
        },
        {
            $set:{ content1: content1 || null,
                  content2: content2 || null,
                  content3: content3 || null,
                  content4: content4 || null
            }
        },
        {
            new: true
        }
    )
    
    if(!cms){
     return res.status(500).json({message: "Failed to save in database"})
    }
    return res.status(200).json({
           content1: cms.content1,
           content2: cms.content2,
           content3: cms.content3,
           content4: cms.content4
    })
   } catch (error) {
     console.log(error)
     return res.status(500).json({message: "Internal server error"})
   }
}

export const getContent = async(req,res)=>{
    try {
        const cms = await Cms.findOne({
            documentName: 'admin'
        })
    
        if(!cms){
            return res.status(404).json({message: "Resource not found"})
        }
    
        return res.status(200).json({ 
            content1: cms.content1,
            content2: cms.content2,
            content3: cms.content3,
            content4: cms.content4
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error"})
    }
}