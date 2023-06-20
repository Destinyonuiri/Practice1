import { Router } from "express";
import{getAllBook,getOneBook,UpdateBook,CreatNewBook} from "../Controller/Bookcontroller"

const Bookrouter = Router()
// gat all books
Bookrouter.get("/",getAllBook)

// getting single book
Bookrouter.get("/single/:bookId",getOneBook)

// creating new book
Bookrouter.post("/create",CreatNewBook)

// updating books
Bookrouter.patch("/updates/:bookId",UpdateBook)

export default Bookrouter