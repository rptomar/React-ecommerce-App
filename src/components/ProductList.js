import React, { useEffect, useState } from "react";

import Product from "./Product";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // async function fetchData() {
        //     try {
        //       const response = await fetch(
        //         "https://amazon-images.p.rapidapi.com/B089B2R9G6/amazon.com.tr",
        //         {
        //           method: "GET",
        //           headers: {
        //             "x-rapidapi-host": "amazon-images.p.rapidapi.com",
        //             "x-rapidapi-key": "fd3d1920dfmsh81ce20c5ffd9ed3p1e5977jsn034d563aad8c"
        //           }
        //         }
        //       );
        //       const data = await response.json();
        //       setProducts(data.data);
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   }
        //   fetchData();
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => setProducts(json.data))
            .catch(error => console.error(error));
    }, []);


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    return (
        <div>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <ul>
                {currentProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </ul>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

        </div>
    );
};
export default ProductList;