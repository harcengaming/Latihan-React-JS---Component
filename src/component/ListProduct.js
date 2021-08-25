import React, { useState } from 'react';

import ProductItem from './ProductItem';
/* state array of object */

function ListProduct() {
    const [count, setCount] = useState(0);

    const [listProduct, setListProduct] = useState( [
            {
                nama: "Intip Goreng",
                stok: 35, 
            }, 
            { 
                nama: "Dawet Ayu",
                stok: 16,
            }, 
            { 
                nama: "Mie Ongklok",
                stok: 7,
            },
        ]);
    // const [nama, setNama] = useState("Nasi gono");

    // const [stok, setStok] = useState(Number);
    // const onClick = () => {
    //     setListProduct( (c => Math.max( c - 1, 0 )) );
    //   };
    //   const onClick2 = () => {
    //     setListProduct( c => c + 1 );
    //   };
        
    return (
        <div>
            <article className="Intip">
                
                <h1>Menmpilkan data arry of object</h1>
                <ProductItem productProps={listProduct} key={setListProduct}/>

                {listProduct.map((item, Number) => (
                <ProductItem listProduct={item} key={Number} />
                ))} 

                <h3>{count}</h3>
                <button onClick={ () => setCount( (c => Math.max(c - 1, 0))) }>-</button>
                <button onClick={ () => setCount( c => c + 1 ) }>+</button>

            </article>
           
        </div>
    );
}

export default ListProduct;
/* lakukan maping pada state lalu tampilkan ProductItem serta berikan props */