const mongoose = require('mongoose')
const CateogrySchema = new  mongoose.Schema ({
      category_name:{
        type:String,
        Required:true,
      },
   
     
      image:{
        public_id:{
            type:String,
        }   ,
        url:{
            type:String,
        },
      }

},{timestamps:true})
const CateogryModel = mongoose.model('cateogry',CateogrySchema)

module.exports = CateogryModel
