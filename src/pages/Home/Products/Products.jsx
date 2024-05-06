import { useEffect, useState } from "react";
import ProductsCrud from "./ProductsCrud";

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="mt-10">
            <div className="text-center space-y-2">
                <h4 className="text-primary font-semibold">Popular Products</h4>
                <h2 className="text-2xl font-bold">Browse Our Products</h2>
                <p className="max-w-xl mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
               {
                products.map((product,idx)=><ProductsCrud 
                key={idx}
                product={product}
                ></ProductsCrud>)
               }
            </div>
        </div>
    );
};

export default Products;