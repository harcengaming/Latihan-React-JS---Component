// import ListProduct from './ListProduct';

/* menerima props dari ListProduct */
const ProductItem = ({ productProps }) => {
  console.log(productProps);

    return (
      <div id="productItem">
        <h2>{productProps}</h2>
      </div>
    )
  }
  
  export default ProductItem;