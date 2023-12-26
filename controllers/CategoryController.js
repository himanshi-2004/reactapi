const CategoryModel = require('../models/Category')
class CategoryController{
    static categoryinsert = async(req,res)=>{
          try{
                             // console.log((req.body))

    const {category} = req.body
    const image = req.files.image;
    //  console.log(image)
    const imageupload = await cloudinary.uploader.upload(image.tempFilePath, {
      folder: "profileimageapi",
    });
    const result = await CategoryModel({
      category:category,
    })
    await result.save();
    res.status(201).json({
        status: "success",
        message: "Category inserted Successfully 😃🍻",
      });
          }
          catch(err){
                console.log(err)
          }
     }

     
     static categorydisplay = async(req,res)=>{
        try{

        }
        catch(err){
            console.log(err)
        }
   }


   static categoryview = async(req,res)=>{
    try{

    }
    catch(err){
        console.log(err)
    }
}


static categoryupdate = async(req,res)=>{
    try{

    }
    catch(err){
        console.log(err)
    }
}


static categorydelete = async(req,res)=>{
    try{

    }
    catch(err){
        console.log(err)
    }
}

}
module.exports  = CategoryController