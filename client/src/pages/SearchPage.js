import React, {useState} from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results"
function SearchPage(){

    const [books, setBooks] = useState([])
    console.log("booksState", books)
    return(
        <div>
        {/* pass in the setbooks method to push the somethign into state */}
            <SearchForm setBooksProp={setBooks}/>
            {/* pass the items in state to the results component */}
            <Results booksProp={books}/> 
        </div>
    )
}
export default SearchPage