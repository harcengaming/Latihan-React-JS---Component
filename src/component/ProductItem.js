// import ListProduct from './ListProduct';

/* menerima props dari ListProduct */
const ProductItem = ({ productProps }) => {
  console.log(productProps);

    return (
      <div id="productItem">
        {/* <h3>{productProps.nama}</h3> */}
      </div>
    )
  }
  
  export default ProductItem;