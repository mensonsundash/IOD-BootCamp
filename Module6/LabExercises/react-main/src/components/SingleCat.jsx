function SingleCat(props) {
    
    return(
    <>
    {/* render data using props sent from parent component BigCats */}
        <li><strong>{props.name} </strong> - {props.category} - {props.status}</li>
    </>
)
}

export default SingleCat;