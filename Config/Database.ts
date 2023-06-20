import mongoose from "mongoose"

const BookDB ="mongodb://localhost/BookstoreDatabase"

 const DbBookstore =async()=>{
try {
    const dbconnect =await mongoose.connect(BookDB)
    console.log(`connected to${dbconnect.connection.host}`)
} catch (error) {
    console.log("error occuring in database")
}

}
export default DbBookstore