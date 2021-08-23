import React, { useState } from 'react';

{/* state array of object */}

function ListProduct() {

    const [listProduct, setListProduct] = useState(0);
    const [listProduct2, setListProduct2] = useState(0);
    const [listProduct3, setListProduct3] = useState(0);
    // const onClick = () => {
    //     setListProduct((c => Math.max(c - 1, 0)));
    //   };
    //   const onClick2 = () => {
    //     setListProduct(c => c + 1);
    //   };
  
    return (
        <div>
            <article className="Intip">
                <h3>Intip Goreng : {listProduct} buah</h3>
                <button onClick={ () => setListProduct( (c => Math.max(c - 1, 0))) }>Kurangi</button>
                <button onClick={ () => setListProduct( c => c + 1 ) }>Tambahan</button>
            </article>
            
            <article className="Dawet">
                <h3>Dawet Ayu : {listProduct2} buah</h3>
                <button onClick={ () => setListProduct2( (c => Math.max(c - 1, 0))) }>Kurangi</button>
                <button onClick={ () => setListProduct2( c => c + 1 ) }>Tambahan</button>
            </article>

            <article className="Mie">
                <h3>Mie Ongklok : {listProduct3} buah</h3>
                <button onClick={ () => setListProduct3((c => Math.max(c - 1, 0))) }>Kurangi</button>
                <button onClick={ () => setListProduct3( c => c + 1 ) }>Tambahan</button>
            </article>
        </div>
    );
}

export default ListProduct;
{/* lakukan maping pada state lalu tampilkan ProductItem serta berikan props */}