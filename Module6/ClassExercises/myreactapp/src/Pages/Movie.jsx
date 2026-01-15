function Movie({year, synopsis, title}) {
    return (
        <>
            <li>
                <h3> {year} <span>{title}</span></h3>
                <div>{synopsis}</div>
            </li>
        </>
    )
}

export default Movie;