import SingleCat from "./SingleCat";
import "../App.css";

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
    return(
            <div className="catList">
                <h2>Big Cats List</h2>

                <ul>
                    {/* mapping full array set and sending through chlid component SingleCat */}
                    {bigCatLists.map((cat) =>(
                        <SingleCat key={cat.id} name={cat.name} category={cat.category} status={cat.status}></SingleCat>
                        
                    ))}
                </ul>
            </div>
        
    );
}

export default BigCats;