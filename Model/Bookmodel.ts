import mongoos from "mongoose";
import {iBook} from "../Interfaces/Allinterfaces"
import mongoose from "mongoose";
interface books extends iBook , mongoose.Document{}

const bookschema = new mongoose.Schema<iBook>({
    title:{
        type: String,
        unique: true,
        required:[true,"please enter a title"]
    },
    authorname:{
        type: String,
    },
    ISBN:{
        type:String,
        unique:true,
    },
    price:{
        type: Number,
    },
    details:{
        type: String,
    },
    isBoring:{
        type: Boolean,
    },
})

const Bookmodel = mongoose.model("Book",bookschema )

export default Bookmodel

