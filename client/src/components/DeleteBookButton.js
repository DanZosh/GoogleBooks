
import React from "react";
import { Button } from "react-bootstrap";
import API from "../utils/API"

function DeleteBookButton({bookIDProp, getBooks}){
    const deleteBook = () =>{
        console.log("book:", bookIDProp)
        API.deleteBook(bookIDProp) //this matches the deleteBook asynch function in API.js
            .then(({data})=>{
                //handle successful response
                console.log(data)
                return getBooks()
            })
            .catch((err) =>{
                console.log(err)
            })
    }


    return (
        <Button onClick ={ deleteBook }>
            Delete
        </Button>
    )
}
export default DeleteBookButton