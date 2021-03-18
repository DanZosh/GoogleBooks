

import React from "react";
import { Button } from "react-bootstrap";

function SaveBookButton({bookProp}){
    const printBook = event =>{

        console.log(bookProp.title)
    }


    return (
        <Button onClick ={ printBook }>
            SAVE
        </Button>
    )
}
export default SaveBookButton