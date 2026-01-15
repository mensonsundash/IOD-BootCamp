function City({ name, state='NSW', country='Australia'}) {
    return(
        <>
            <div>
                <strong>{name}</strong> is in {state}, {country}
            </div>
        </>
    )
}

export default City;