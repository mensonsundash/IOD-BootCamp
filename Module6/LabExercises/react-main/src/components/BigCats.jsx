import SingleCat from "./SingleCat";
import "../App.css";
import { useState } from "react";
import AddCatForm from "./AddCatForm";

// M6 LAB EXERCISE 2 
//set of array data
const bigCatLists = [
  { id: 1, name: "African Lion", category: "Savanna", status: "Vulnerable" },
  { id: 2, name: "Asiatic Lion", category: "Savanna", status: "Endangered" },
  { id: 3, name: "Bengal Tiger", category: "Forest", status: "Endangered" },
  { id: 4, name: "Siberian Tiger", category: "Forest", status: "Endangered" },
  { id: 5, name: "Indochinese Tiger", category: "Forest", status: "Critically Endangered" },
  { id: 6, name: "African Leopard", category: "Mountain", status: "Vulnerable" },
  { id: 7, name: "Snow Leopard", category: "Mountain", status: "Vulnerable" },
  { id: 8, name: "Clouded Leopard", category: "Mountain", status: "Vulnerable" },
  { id: 9, name: "Jaguar", category: "Rainforest", status: "Near Threatened" },
  { id: 10, name: "Cougar (Puma)", category: "Rainforest", status: "Least Concern" },
  { id: 11, name: "Cheetah", category: "Savanna", status: "Vulnerable" },
  { id: 12, name: "West African Lion", category: "Savanna", status: "Critically Endangered" },
  { id: 13, name: "Amur Leopard", category: "Forest", status: "Critically Endangered" },
  { id: 14, name: "Sri Lankan Leopard", category: "Forest", status: "Vulnerable" },
  { id: 15, name: "Andean Mountain Cat", category: "Mountain", status: "Endangered" }
];

function BigCats() {

    // LAB 5: State cats now holds the list
    const [cats, setCats] = useState(bigCatLists); 

    // LAB Exercise 4: Filtering and sorting
    //default: filter=ALL & sort=NONE
    const [filter, setFilter] = useState("ALL");
    const [sort, setSort] = useState("NONE");

    // list of catgories
    const uniqueCategory = new Set(cats.map((c) => c.category));
    const categories = ["ALL", ...uniqueCategory];


    // form submission
    const handleAddCat = (newCat) => {

        // cats list is now added with new sets of object values alongside
        //newcat parameter comes back from child AddCatForm which takes object of {name, category, status}
        setCats([
            ...cats,
            {
                id: cats.length + 1,
                ...newCat
            }
        ])
    };

    //display cat with full list as to prevent array mutation
    let displayCats = [...cats];

    //if filter state changes
    if(filter !=='ALL') {
        displayCats = displayCats.filter((cat) => cat.category === filter);
    }

    //if sort state changes
    if(sort === "NAME_ASC"){
        displayCats.sort((a,b) => a.name.localeCompare(b.name));
    } else if(sort === "NAME_DESC") {
        displayCats.sort((a,b) => b.name.localeCompare(a.name));
    }

    
    return(
            <div className="content-body">
                <h2>Big Cats List</h2>
            
                <div className="container">
                    {/* ADD Cats */}
                    {/* <AddCatForm onAddCat = {handleAddCat} categories={{categories.filter((c) => c !== "ALL")}} /> */}
                    <div className="left-sidebar">
                        <AddCatForm onAddCat={handleAddCat} categories={categories.filter((c) => c !="ALL")}></AddCatForm>
                    </div>
                    
                    <div className="content-panel">    
                        {/* FILTERING */}
                        <label>
                            Filter by Category: {" "}
                            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </label>

                        {/* SORTING */}
                        <label style={{marginLeft:"10px"}}>
                            Sort: {" "}
                            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="NONE">NONE</option>
                                <option value="NAME_ASC">Name A-Z</option>
                                <option value="NAME_DESC">Name Z-A</option>
                            </select>
                        </label>
                    
                        {/* OUTPUT: */}
                        <ul>
                            {/* mapping full array set and sending through chlid component to render SingleCat row*/}
                            {displayCats.map((cat) =>
                                <SingleCat key={cat.id} name={cat.name} category={cat.category} status={cat.status}></SingleCat>
                                
                            )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        
    );
}

export default BigCats;