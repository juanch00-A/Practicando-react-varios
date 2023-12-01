import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const getFetch = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`¡Error HTTP! Estado: ${response.status}`);
            }
            const data = await response.json();
            setState({
                data,
                isLoading: false,
                error: null
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                error
            });
        }
    };

    useEffect(() => {
        if (!url) return;
        getFetch();
    }, [url]);

    const { data, isLoading, error } = state; 

    return {
        data,
        isLoading,
        error
    };
};
