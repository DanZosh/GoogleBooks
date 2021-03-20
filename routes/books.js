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
        .then(newBook => res.json(newBook)) //if we successfully create a new book in our database, the new book is returned as     proof
        .catch(err => console.log("error:",err))

    // res.json ({didit:true});
})

module.exports = router