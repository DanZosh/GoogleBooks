const router = require("express").Router();
const {Book} = require("../models")



router
    .route("/books")
    .get((req,res)=>{
        Book
            .find({})
            .then(books => res.json(books))
            .catch(err => console.log(err))
    })
    .post( (req,res) =>{
        console.log("req.body:", req.body)
        //deconstruct the parameters of our req.body. 
        //the 'req' represents the content i'm requesting the backend to store. the content of which comes from API.js addBook function and the 'book' argument in the return axios.post. 
        const {title, authors, description, image, link} = req.body;

        Book.create({
            title,
            authors,
            description,
            image,
            link
        })
        .then(newBook => res.json(newBook)) //if we successfully create a new book in our database, the new book is returned as proof
        .catch(err => console.log("error:",err))

    // res.json ({didit:true});
})

router
    .route("/books/:id")
    .delete( (req, res) =>{ //this is the RESTful method that matches API.js
        console.log("req.params.id:", req.params.id)
        Book.findByIdAndDelete(req.params.id) //this is the mongo method
            .then(delBook => res.json(delBook)) //if we successfully delete a  book in our database, the new book is returned as proof
            .catch(err => console.log("error:",err))

    })
module.exports = router