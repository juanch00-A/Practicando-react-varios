import React from "react";

const Incrementar = React.memo(({ incrementar }) => {

    console.log("Me estoy redibujando")

    return (
        <>
            <button onClick={() => incrementar(10)}>+1</button>
        </>
    );
}
)
export default Incrementar;
