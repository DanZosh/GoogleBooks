
import React from "react";
import { Button } from "react-bootstrap";
import API from "../utils/API"

function SaveBookButton({bookProp}){
    const saveBook = () =>{
        console.log("book:", bookProp)
        API.addBook(bookProp)
            .then(()=>{
                //handle successful response
                console.log("success")
            })
            .catch((err) =>{
                console.log(err)
            })
    }


    return (
        <Button onClick ={ saveBook }>
            SAVE
        </Button>
    )
}
export default SaveBookButton