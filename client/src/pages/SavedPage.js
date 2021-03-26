import React ,{useState, useEffect}from "react";
import SavedResults from "../components/SavedResults";
import API from "../utils/API"

function SavedPage(){
    const [savedBooks, setSavedBooks] = useState([])

    const getBooks =()=>{ //this is moved out of the useEffect and called there so that this function can be sennt down the chain to SavedResults and the DeleteBookButton as a prop so when the button is clicked the getBooks is called and refreshes the page via useEffect 
          API
            .getBooks()
            .then(({ data })=>{
                setSavedBooks(data)
            });
    }
    useEffect(() => {
      getBooks()
    }, [setSavedBooks]);

    console.log(savedBooks)
    return(
        <div>
            <h1>SavedBooks</h1>
            <SavedResults booksProp = {savedBooks} getBooks={getBooks}/> 
        </div>
    );
}
export default SavedPage