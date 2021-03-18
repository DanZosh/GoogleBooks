import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function SearchForm(){
    return(
        <Card>
        <Card.Body>
            <h2> Search</h2>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Enter book name" />
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