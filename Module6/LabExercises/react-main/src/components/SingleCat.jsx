function SingleCat(props) {
    // M6 LAB EXERCISE 2 
    return(
    <>

        {/* render data using props sent from parent component BigCats */}
        <li><strong>{props.name} </strong> - {props.category} - {props.status}</li>
    </>
)
}

export default SingleCat;