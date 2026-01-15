import BookList from "./BookList";
import BookFilter from "./BooksFiler";

const data = [];

function Books() {
    return(
        <>
            <div>
                <h1>Books</h1>
                <div>
                    <h3>Here is book list</h3>
                    <BookList books={{data}}></BookList>
                </div>

                <div>
                    <h3>Here is book filter</h3>
                    <BookFilter books={{data}}></BookFilter>
                </div>
                
                
            </div>
            
        </>
    )
}

export default Books;