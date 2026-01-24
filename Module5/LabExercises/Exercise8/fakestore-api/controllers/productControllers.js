const fakeUrl = "https://dummyjson.com/products";

const getAllProducts = async (req, res) => {
    
    try{
        const response = await fetch(fakeUrl);

        if(!response.ok) {
            return res.status(response.status),json({
                error: "Failed to fetch products from external API"
            });
        }

        const data = await response.json();

        return res.status(200).json(data);

    } catch(error) {
        return res.status(500).json({error: "Server error: Fetching Products"});
    }
}

module.exports = { getAllProducts}