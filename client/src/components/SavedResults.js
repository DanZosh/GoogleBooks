import React from "react"
import { Card } from "react-bootstrap"
// import SaveBookButton from "./SaveBookButton"


//import the state store for books to render some results
function SavedResults({booksProp}){

    return(
        <Card className="my-3">
        <Card.Body>
        {booksProp.length 
        ? (
            <div>
                <h2>Results</h2>
                {booksProp.map((book)=>( //we're defining book here as the argument which is why we can use bookProp to pass into the SaveBookButton below
                    <Card 
                        className="my-3"
                        key={book.id}
                    >
                        <Card.Body>
                            <p>{book.title}</p>
                            <p>{book.description}</p>
                            {/* <SaveBookButton bookProp={book}/> */}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )

        :
        <h2>no results</h2>}
        </Card.Body>
        </Card>
    )



}
export default SavedResults 