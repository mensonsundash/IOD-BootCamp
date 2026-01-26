function SampleUncontrolledForm() {
  
    function handleFormData(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        // onAddMovie(Object.fromEntries(data));
        alert(data.get("name"))
        alert(data.get("password"))
    }   
  
  return(<>
        <div> Sample Uncontrol form
            <form onSubmit={handleFormData}>
                <div>
                    <label>Name:
                        <input type="text" name="name"/>
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input type="password" name="password"/>
                    </label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>        
        </div>
    </>)
};

export default SampleUncontrolledForm;