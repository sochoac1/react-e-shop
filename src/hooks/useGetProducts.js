import { useEffect, useState } from 'react';
import axios from 'axios';

//Custom Hook -- Reutilizable (Lista de todos los productos  - Lista x y y productos)
const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const response = await axios(API);
            setProducts(response.data);
        }
        fetchData();
    }, []);

    return products;
};

export default useGetProducts;