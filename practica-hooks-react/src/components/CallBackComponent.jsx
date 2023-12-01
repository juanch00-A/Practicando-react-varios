import React, { useCallback, useState } from "react";
import Incrementar from "./Incrementar";

export const CallBackComponent = () => {
    const [counter, setCounter] = useState(0);

    const incrementarPadre = useCallback((val) => {
        setCounter(contador => contador + val);
    },[]
    )

    return (
        <>
            <h3>Contador: {counter}</h3>
            <Incrementar incrementar={incrementarPadre} />
        </>
    );
}
