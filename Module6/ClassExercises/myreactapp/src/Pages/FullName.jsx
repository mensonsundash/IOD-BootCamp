import NamePart from './NamePart';
import Message from './Message';
function FullName({firstname, lastname}) {
    return (
        <>
            <div>
                Full Name: <NamePart name={firstname}></NamePart> {" "}
                <NamePart name={lastname}></NamePart>
            </div>
            <div>
                {/* <Message text={children}>
                </Message> */}
                <Message>
                    {/* {children} */}
                    <NamePart firstname="Ronnuy"></NamePart>
                </Message>
            </div>
        </>
    );
}

export default FullName;