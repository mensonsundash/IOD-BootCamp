import { useState } from "react";

function AddCatForm({onAddCat, categories}){

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!name || !category || !status) {
            alert("Please fill all fields");
            return;
        }

        const newCat = {
            name,
            category,
            status
        };

        onAddCat(newCat);

        //reset Form
        setName("");
        setCategory("");
        setStatus("");
    }

    return(
        <>
        <div className="form-container">
            <h3>Add New Big Cat</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Category: </label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Status: </label>
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
                </div>

                <div>
                    <button type="submit">Add Cat</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddCatForm;