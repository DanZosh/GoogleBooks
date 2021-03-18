import React, {useRef} from "react";
import { Button, Card, Form } from "react-bootstrap";
import API from "../utils/API";

function SearchForm({setBooksProp}){

    const bookInput = useRef();

    const handleSubmit = event =>{

        event.preventDefault();
        console.log(bookInput.current.value)
        API.getBooks()
            .then( ({data}) => {
                console.log(data);
                setBooksProp(data) //use the setBooksProp method to revise state linked in line 5 to pass the data from the API call into the state. The method to update state is defined in line 6 on SearchPage
            });
    }


    return(
        <Card>
        <Card.Body>
            <h2> Search</h2>
            <Form onSubmit = {handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control ref ={bookInput} type="text" placeholder="Enter book name" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
            </Form>
        </Card.Body>
        </Card>
    )

}
export default SearchForm