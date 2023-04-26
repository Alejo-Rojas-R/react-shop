import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [url]);

    const getData = async () => {
        setLoading(true);

        const resp = await fetch(url);
        const data = await resp.json();

        setData(data);

        setLoading(false);
    }

    return {
        data,
        loading
    }
}
