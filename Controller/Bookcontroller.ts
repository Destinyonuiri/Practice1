import Bookmodel from "../Model/Bookmodel";
import {Request,Response} from "express"

// getting one book
export const getOneBook = async(req:Request,res:Response):Promise<Response> =>{
try {
    const getBook = await Bookmodel.findById(req.params.bookId)
    return res.status(200).json({
        message:"here is ur book",
        data:getBook
    })
} catch (error:any) {
    return res.status(404).json({
        Message:"error in gettng a book",
        data: error.message
})
}
}

//  getting all book

export const getAllBook = async (req:Request,res:Response):Promise<Response> =>{
    try {
        const allBook = await Bookmodel.find()
        return res.status(200).json({
            message:"All available in the store",
            data: allBook
        })
    } catch (error:any) {
       return res.status(404).json({
            message:"error in getting all book",
            data:error.message
        })
        
    }
}


// creating your own books

export const CreatNewBook = async(req:Request,res:Response):Promise<Response> =>{
    try {

        const {title,authorname,ISBN,isBoring,price,details}= req.body
        const getISBN1 = await authorname.chartAt(0).toUpperCase()
        const generateISBN = await`${getISBN1}_${Math.random()*100}`

        const Creatbook = await Bookmodel.create({
        title,authorname,ISBN:generateISBN,isBoring,price,details
        })
        return res.status(201).json({
            message:"Book Created sucessfully",
            data:Creatbook
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error creating book",
            data:error.message
        })
        
    }
}

// updating of books

export const UpdateBook = async (req:Request,res:Response):Promise<Response> =>{
    try {
        const {title,price} =req.body
        const Updatesomebook = await Bookmodel.findByIdAndUpdate(req.params.bookId,{title,price},{new:true})
        return res.status(201).json({
            message:"book updated",
            data:Updatesomebook
        })
    } catch (error:any) {
        return res.status(404).json({
            message:"error Updating book",
            data:error.message

    })
}}