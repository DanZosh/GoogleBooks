import React ,{useState, useEffect}from "react";
import SavedResults from "../components/SavedResults";
import API from "../utils/API"

function SavedPage(){
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
        API
            .getBooks()
            .then(({ data })=>{
                setSavedBooks(data)
            });
    }, [setSavedBooks]);
    console.log(savedBooks)
    return(
        <div>
            <h1>SavedBooks</h1>
            <SavedResults booksProp = {savedBooks}/>
        </div>
    );
}
export default SavedPage