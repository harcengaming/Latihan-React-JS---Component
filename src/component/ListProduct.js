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

                <ProductItem productProps={listProduct[0].nama} type={setListProduct}/>
                <ProductItem productProps={listProduct[0].stok} type={setListProduct}/>
                <ProductItem productProps={listProduct[1].nama} type={setListProduct}/>
                <ProductItem productProps={listProduct[1].stok} type={setListProduct}/>
                <ProductItem productProps={listProduct[2].nama} type={setListProduct}/>
                <ProductItem productProps={listProduct[2].stok} type={setListProduct}/>

                {listProduct.map((item, stok) => (
                <ProductItem listProduct={item} key={stok} />
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