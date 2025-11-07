import { useEffect } from 'react';

const BASE_URL = 'https://api.pexels.com/v1/search';

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = () => {
    const buildUrl = () => {
        let url = new URL('https://api.pexels.com/v1/search');
        url.search = new URLSearchParams({
            query: 'nature', //change to a variable
            orientation: 'square',
            size: 'small',
            per_page: 2, //change this to a variable
            page: getRandomPage(),
        });
        // console.log('url', url);
        return url;
    };

    const fetchPics = () => {
        fetch(buildUrl(), {
            headers: {
                Authorization: 'SV5y6V6aMIn7YWRxeniV2BlzxX1wzpaG4DirVslvmi5iOymsMMvsYiMP',
            },
        });
    };

    useEffect(() => {
        fetchPics();
    }, []);
};

export default useGetImages;
