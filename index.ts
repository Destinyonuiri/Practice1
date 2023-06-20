import express,{Request,Response} from "express";
import DbBookstore from "./Config/Database"
import  books from "./router/Bookrouter"

const port = 2000
const app = express()
app.use(express.json())
.use("/api/books",books)

app.get("/",(req:Request,res:Response)=>{
    try {
      return res.status(200).json({
        message:"server connected",
    })
    } catch (error) {
        return res.status(404).json({
            message:"error in connecting to server"
        })
    }
})

DbBookstore()

app.listen(port,()=>{
    console.log("")
    console.log("server is on")
})
