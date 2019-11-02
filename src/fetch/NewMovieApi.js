import {useState, useEffect} from 'react';
import axios from 'axios';

function useSearchRickAPI(search) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const searchCharacter = async () => {
        const result = await axios(
            `https://rickandmortyapi.com/api/character/${queryString}`
        );

        setData(result.data);
        setLoading(false);
    };

    useEffect(
        () => {
            searchCharacter();
        },
        [search]
    );

    return [data, loading];
}

export default useSearchRickAPI;
