// LAB6
//function takes arguments of select cases
function SelectInput({label, value, onChangeFunc}) {

    return (
        <>
        <div>
            <label>{label}</label>
            <select value={value} onChange={(e) => onChangeFunc(e.target.value)}>
                <option value="/">/</option>
                <option value="x">x</option>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
        </div>
        </>
    )
}

export default SelectInput;