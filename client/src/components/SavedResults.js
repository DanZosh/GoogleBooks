import React from "react"
import { Button, Card } from "react-bootstrap"
import DeleteBookButton from "./DeleteBookButton"


//import the state store for books to render some results
function SavedResults({booksProp, getBooks}){

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
                        key={book._id}
                    >
                        <Card.Body>
                            <DeleteBookButton 
                                bookIDProp={book._id}
                                getBooks={getBooks}
                                >Delete</DeleteBookButton>
                            <Button href={book.link}>View</Button>
                            <p>{book.title}</p>
                            <p>{book.description}</p>
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